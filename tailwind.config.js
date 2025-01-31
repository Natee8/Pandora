/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./**/*.{html,js}",
    './*.{html,js}',
    './index.{html,js}',
  ],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'color-primary': '#10111D',
      'color-secondary': '#16172B',
      'container-image': '#131318',
    },
    extend: {
      fontFamily: {
        abel: ['Abel']
      },
      colors: {
        'vibrant-blue': '#00F0FF',
        'semi-vibrant-blue': '#BCFBFF',
        'blue': '#0086C8',
        'semi-blue': '#6BCFE4',
      },
      backgroundImage: {
        'lines': "url('/assets/images/icons/lines.svg')",
      }
    },
  },
  plugins: [],
}