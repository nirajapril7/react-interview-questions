# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Configuration Changes
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

update tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

https://tailwindcss.com/docs/guides/vite

Install PostCSS Language Support VSCode extention, since Tailwind CSS is a PostCSS plugin