/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [process.env.NEXT_PUBLIC_WP_URL?.replace(/^https?:\/\//, '')],
    },
    async redirects() {
        return [];
    },
};

export default nextConfig;
