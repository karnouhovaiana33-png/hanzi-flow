import type { NextConfig } from 'next';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserPagesRepository = repositoryName.endsWith('.github.io');
const isGitHubPages = process.env.GITHUB_PAGES === '1';
const isStaticExport = process.env.STATIC_EXPORT === '1' || isGitHubPages;
const assetPrefix = isGitHubPages && !isUserPagesRepository
  ? `/${repositoryName}`
  : '';

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? { output: 'export' as const, assetPrefix }
    : {}),
  images: { unoptimized: true },
};

export default nextConfig;
