import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Specify the paths to all of the template files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B5B9A', // Purple color
        secondary: '#FFFFFF', // White color
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Custom font family
      },
    },
  },
  plugins: [],
});