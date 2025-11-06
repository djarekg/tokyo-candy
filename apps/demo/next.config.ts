import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // browserDebugInfoInTerminal: true,
  cacheComponents: true,
  reactCompiler: true,
  typedRoutes: true,
  experimental: {
    swcPlugins: [['fluentui-next-appdir-directive', { paths: ['@griffel', '@fluentui'] }]],
    // optimizePackageImports: [''], // https://nextjs.org/docs/app/api-reference/config/next-config-js/optimizePackageImports
  },
};

export default nextConfig;
