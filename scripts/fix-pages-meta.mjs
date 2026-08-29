import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const outputDirectory = resolve('dist/client');
const siteUrl = process.env.SITE_URL;

if (!siteUrl) {
  throw new Error('SITE_URL is required');
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
