/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        /* prettier-ignore */ serifBrand: ['"Cormorant Garamond"', 'serif'],
        /* prettier-ignore */ sansBrand: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },

      colors: {
        gold: "#CAA05A",
        /* prettier-ignore */ 'gold-dark': '#AD8A4B',
        /* prettier-ignore */
        'brown-dark': 'var(--color-brown-dark)',
      },
      letterSpacing: {
        wideBrand: "0.2em",
      },
    },
  },
};
