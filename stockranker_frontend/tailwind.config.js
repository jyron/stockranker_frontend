/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0072bb', // Deep sky blue
        secondary: '#ff4500', // Orange red
        accent: '#ffd700', // Gold
        background: '#ffffff', // Pure white
      },
      fontFamily: {
        body: ['"Noto Sans JP", sans-serif'],
      },
      borderRadius: {
        'lg': '0.5rem', // Larger border radius for elements
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
      }
    }
  },
  plugins: [],
}

