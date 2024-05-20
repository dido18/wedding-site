const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
      "./src/**/*.{html,js}",
     './index.html',
  ],
  theme: {
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
