import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "app.quantpay.in",
          },
        ],
        destination: "/_app",
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "app.quantpay.in",
          },
        ],
        destination: "/_app/:path*",
      },
    ];
  },
};

export default nextConfig;