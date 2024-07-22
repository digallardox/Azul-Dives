/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedForwardedHosts: [
        "urban-couscous-595jw7gwj6wc44wv-3002.app.github.dev",
        "urban-couscous-595jw7gwj6wc44wv-3001.app.github.dev",
      ],
      allowedOrigins: [
        "localhost:3002",
        "urban-couscous-595jw7gwj6wc44wv-3002.app.github.dev",
        "localhost:3001",
        "urban-couscous-595jw7gwj6wc44wv-3001.app.github.dev",
      ],
    },
  },
};

export default nextConfig;
