module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '86': '22rem',
        '100': '26rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
