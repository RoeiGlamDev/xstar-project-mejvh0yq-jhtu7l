import { defineConfig } from 'next';

export default defineConfig({
  reactStrictMode: true, // Enables React's strict mode
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  i18n: {
    locales: ['en-US', 'fr'], // Add your supported locales here
    defaultLocale: 'en-US',
  },
  experimental: {
    appDir: true, // Enables the app directory feature
  },
});