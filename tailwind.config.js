/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
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
