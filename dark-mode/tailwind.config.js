/** @type {import('tailwindcss').Config} */
export default {
  // 1. This is the crucial line. 
  // It tells Tailwind to enable its 'dark:' variants whenever the 'dark' class is present on the HTML tag.
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}