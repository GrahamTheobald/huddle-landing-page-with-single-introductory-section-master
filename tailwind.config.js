/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        Violet: 'hsl(257, 40%, 49%)',
        SoftMagenta: 'hsl(300, 69%, 71%)',
      },
      fontFamily: {
        openSans: ['Open Sans'],
        poppins: ['Poppins'],
      }
    },
  },
  plugins: [],
}
