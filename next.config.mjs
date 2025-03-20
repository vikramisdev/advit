/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Helps catch potential issues in development
    images: {
        domains: ["images.pexels.com"], // Allows Next.js to load images from Pexels
    },
};

export default nextConfig;
