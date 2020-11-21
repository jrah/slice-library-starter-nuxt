const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    mode: 'layers',
    layers: [''],

  },
  theme: {
    extend: {
      inset: {
        '1/2': '50%'
      },
      colors: { 
        // http://colormind.io/#:~:text=If%20no%20colors%20are%20locked%20Colormind%20will%20generate,them%20at%20the%20opposite%20ends%20of%20the%20palette.
        'primary': '#1F1620',
        'secondary': '#F6E5C9'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}
