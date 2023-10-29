/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',   // Small screens like mobile
        'md': '768px',   // Medium screens like tablets
        'lg': '1024px',  // Large screens like desktops
        'xl': '1280px',  // Extra-large screens
      },
    },
  },
  plugins: [],
}

