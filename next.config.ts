import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "standalone",
  // Proxy event share pages (and future universal-link files) to the backend,
  // so links read zahleapp.com/e/<id> while the API serves the OG page/poster.
  // Rewrites are proxies (URL stays on zahleapp.com) and work on Vercel and
  // on the standalone server.js alike.
  async rewrites() {
    return [
      {
        source: "/e/:path*",
        destination: "https://api.zahle.progressivelb.com/e/:path*",
      },
      {
        source: "/.well-known/:path*",
        destination: "https://api.zahle.progressivelb.com/.well-known/:path*",
      },
    ];
  },
};

export default nextConfig;
