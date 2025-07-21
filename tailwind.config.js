/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#61DAFB",     // React blue
        darkBg: "#1e1e1e",      // dark background
        lightText: "#f3f4f6",   // light text
      },
    },
  },
  plugins: [],
}
