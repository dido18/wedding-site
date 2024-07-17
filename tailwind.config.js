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
        'blue-900': '#264681',
        'blue-700': '#5e83ad',
        'blue-200': '#c6d1dc',
    },
    extend: {
      fontFamily: {
        'sans': ['Fondamento', ...defaultTheme.fontFamily.sans]
      },
    },
    // safelist: [
    //     'bg-orange-50',
    //   ],
  },
  plugins: [],
}
