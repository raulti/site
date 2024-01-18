/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  compiler:{
    styledComponents: true
  },
  images: {
    domains: ['dummyimage.com', 'risestudio.com.br', 'api.easy.risestudio.com.br', 'localhost', 'images.unsplash.com', 'sandbox.api.pagseguro.com', 'api.pagseguro.com'],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: false,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,

      use: ["@svgr/webpack"]
    });

    return config;
  }


}

module.exports = nextConfig
