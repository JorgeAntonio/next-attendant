/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
        TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL,
    }
};

export default nextConfig;
