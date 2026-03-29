import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return[
      {
        source: '/api/leetcode',
        destination: 'https://leetcode.com/graphql/',
      },
    ];
  },
};

export default nextConfig;
