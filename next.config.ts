import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/app",
  images: {
    remotePatterns: [
      { hostname: "cdn.prod.website-files.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "placehold.co" },
    ],
  },
};

export default nextConfig;
// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
