import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  serverExternalPackages: ["nodemailer"],
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
