/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#CAA05A",
        "gold-dark": "#AD8A4B",
        /* prettier-ignore */
        'brown-dark': 'var(--color-brown-dark)',
      },
    },
  },
};
