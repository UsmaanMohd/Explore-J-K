/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        darkBg: '#0f172a',    // Tailwind slate-900
        cardBg: '#1e293b',    // Tailwind slate-800
        brand: '#3b82f6',     // Tailwind blue-500
        brandLight: '#60a5fa',// Tailwind blue-400
        highlight: '#f59e0b', // Amber-500
      }
    },
  },
  plugins: [],
}
