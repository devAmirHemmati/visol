/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'en',
  },
  compiler: { removeConsole: true },
};

module.exports = nextConfig;
