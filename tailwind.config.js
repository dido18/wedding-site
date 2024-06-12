const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
      "./src/**/*.{html,js}",
     './index.html',
  ],
  theme: {
    colors: {
        'brown': '#f1f1ea',
        'brown-900': '#3a210c',
    },
    extend: {
      fontFamily: {
        'sans': ['Fondamento', ...defaultTheme.fontFamily.sans]
      },
    },
    safelist: [
        'bg-orange-50',
      ],
  },
  plugins: [],
}
