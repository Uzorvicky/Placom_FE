import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    compiler: {
    styledComponents: true,
  },
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
          port: "",
          pathname: "/**",
        },
        { protocol: "https", hostname: "dummyimage.com" },
      ],
    },
};

export default nextConfig;
