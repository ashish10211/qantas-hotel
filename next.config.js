/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    ...nextConfig,
    domains: ["unsplash.it"],
  },
};
