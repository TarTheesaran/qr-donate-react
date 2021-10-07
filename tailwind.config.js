module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '540px',
      'sm': '640px',
      'md': '768px',
      'sl': '860px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '86': '22rem',
        '100': '26rem',
      },    
    },

  },
  variants: {
    translate: ['responsive', 'group-hover', 'group-focus', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'group-hover','group-focus', 'focus'],
    opacity: ['active', 'hover', 'group-hover','group-focus', 'focus'],
  },
  plugins: [],
}
