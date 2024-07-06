/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair-display': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'raleway':['Raleway','serif'],
      },
    },
  },

  plugins: [],
}

