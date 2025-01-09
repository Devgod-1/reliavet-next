/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [process.env.NEXT_PUBLIC_WP_URL?.replace(/^https?:\/\//, '')],
    },
    async redirects() {
        return [
            {
                source: '/2024/02/27/can-dogs-eat-butternut-squash',    // Path to redirect from
                destination: '/blog/1374',                              // Path to redirect to
                permanent: true, // 301 Permanent Redirect
            },
            {
                source: '/2024/04/16/how-to-increase-your-veterinary-practices-appointments',
                destination: '/blog/1602',
                permanent: true,
            },
            {
                source: '/2024/04/10/5-reasons-online-vet-care-is-changing-the-industry',
                destination: '/blog/1576',
                permanent: true,
            },
            {
                source: '/services/scheduled-telemedicine',
                destination: '/',
                permanent: true,
            },
            {
                source: '/pet-hospitals',
                destination: '/find-hospital',
                permanent: true,
            },
            {
                source: '/2024/04/11/is-purina-one-a-good-dog-food',
                destination: '/blog/1582',
                permanent: true,
            },
            {
                source: '/2024/02/05/blog-revolutionizing-pet-healthcare',
                destination: '/blog/1298',
                permanent: true,
            },
            {
                source: '/services/teleadvice',
                destination: '/',
                permanent: true,
            },
            {
                source: '/services',
                destination: '/',
                permanent: true,
            },
            {
                source: '/2024/04/16/how-vets-can-keep-pet-owner-clients-for-life',
                destination: '/blog/1608',
                permanent: true,
            },
            {
                source: '/our-vets',
                destination: '/find-vet',
                permanent: true,
            },
            {
                source: '/2024/04/16/how-to-make-sure-your-online-vet-appointment-goes-smoothly',
                destination: '/blog/1606',
                permanent: true,
            },
            {
                source: '/services/instant-telemedicine',
                destination: '/',
                permanent: true,
            },
            {
                source: '/blogs',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/2024/04/16/how-to-maximize-your-pet-hospitals-success-with-virtual-vet-appointments',
                destination: '/blog/1604',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
