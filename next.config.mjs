/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: '.next',

    async rewrites() {
        return [
            {
                source: "/Join-Us",
                destination: "/joinus",
            },
            {
                source: "/Gallery/Poornbrahma",
                destination: "/Poornbrahma",
            },
            {
                source: "/Gallery/Swayamprerak-Anniversary",
                destination: "/Anniversary",
            },
            {
                source: "/Gallery/Swayamprerak-Anniversary/First-Anniversary",
                destination: "/Anniversary-1"
            },
            {
                source: "/Gallery/Swayamprerak-Anniversary/Second-Anniversary",
                destination: "/Anniversary-2"
            },
            {
                source: "/Gallery/Tree-plantation",
                destination: "/Tree-plantation"
            },
            {
                source: "/Gallery/Poornbrahma/May",
                destination: "/May",
            },
            {
                source: "/Gallery/Poornbrahma/June",
                destination: "/June",
            },
            {
                source: "/Gallery/Poornbrahma/July",
                destination: "/July",
            },
            {
                source: "/Gallery/Poornbrahma/August",
                destination: "/August",
            },
            {
                source: "/Gallery/Poornbrahma/September",
                destination: "/September",
            },
            {
                source: "/Gallery/Poornbrahma/October",
                destination: "/October",
            },
            {
                source: "/Gallery/Poornbrahma/November",
                destination: "/November",
            },
            {
                source: "/Gallery/Poornbrahma/December",
                destination: "/December",
            },
        ];
    },
};

export default nextConfig;
