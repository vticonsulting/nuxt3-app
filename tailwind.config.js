const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { colors: appColors } = require('./app.config')

module.exports = {
  darkMode: 'class',
  plugins: [
    require('@formkit/themes/tailwindcss'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // require('daisyui'),
  ],
  content: [
    'content/**/*.{md,yml,json,json5,csv}',
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'formkit.config.{js,ts}',
    'theme.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.stone,
        primary: appColors.sanJuan,
        secondary: appColors.tango,
        accent: appColors.tango,
        brand: appColors.toreaBay,
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xs': ['0.625rem', '0.875rem'],
      },
      gridTemplateColumns: {
        22: 'repeat(22, minmax(60px, 1fr))',
      },
    },
  },
}
