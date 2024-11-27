/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [process.env.NEXT_PUBLIC_WP_URL?.replace(/^https?:\/\//, '')],
    },
};

export default nextConfig;
