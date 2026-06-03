/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5A062F", // Deep Wine Maroon
          dark: "#5A062F", // Deep Maroon/Wine
          light: "#821048", // Lighter brand maroon
        },
        secondary: "#5A062F", // Deep Maroon/Wine (Typography)
        accent: {
          DEFAULT: "#C5A85A", // Soft Gold
          light: "#F5EFEB", // Cream/Gold wash
          dark: "#AA8E43", // Deep Rich Gold
        },
        background: "#FCF9F2", // Creamy base background
        surface: "#FAF6EC", // Linen card surface
        borderGold: "#EBE3D3", // Soft subtle gold border
      },
      fontFamily: {
        sans: ['Jost', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}
