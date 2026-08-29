import { access, readdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { join, resolve, sep } from 'node:path';

const outputDirectory = resolve('dist/client');
const siteUrl = process.env.SITE_URL;
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];

if (!siteUrl) {
  throw new Error('SITE_URL is required');
}

if (!repositoryName) {
  throw new Error('GITHUB_REPOSITORY is required');
}

const nestedAssets = resolve(outputDirectory, repositoryName, '_next');
const publicAssets = resolve(outputDirectory, '_next');

if (!publicAssets.startsWith(`${outputDirectory}${sep}`)) {
  throw new Error('Asset destination escaped the build directory');
}

try {
  await access(nestedAssets);
  await rm(publicAssets, { recursive: true, force: true });
  await rename(nestedAssets, publicAssets);
  await rm(resolve(outputDirectory, repositoryName), { recursive: true, force: true });
} catch (error) {
  if (error?.code !== 'ENOENT') throw error;
}

async function patchHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await patchHtml(path);
    } else if (entry.name.endsWith('.html')) {
      const source = await readFile(path, 'utf8');
      const patched = source.replaceAll('http://localhost:3000/', siteUrl);
      await writeFile(path, patched);
    }
  }
}

await patchHtml(outputDirectory);
