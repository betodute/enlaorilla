import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // tells Next to generate static HTML files in /out
  images: { unoptimized: true } // required for static export when using <Image />
};

export default nextConfig;
