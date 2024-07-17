/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        ppr: 'incremental',
      },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
            },
        ],
    },
};

export default nextConfig;
