/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ← ¡todas tus rutas de React!
  ],
  theme: {
    extend: {
      colors: {
        gold: "#CAA05A",
        "gold-dark": "#AD8A4B",
      },
    },
  },
  plugins: [],
};
