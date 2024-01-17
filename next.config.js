/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
    basePath: isProd ? '/nextjsblog' : '',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig