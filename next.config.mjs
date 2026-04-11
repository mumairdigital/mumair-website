/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    serverComponentsExternalPackages: ["nodemailer"],
  },
  reactStrictMode: true,
};

export default nextConfig;
