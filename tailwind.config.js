const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
      "./src/**/*.{html,js}",
     './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans': ['Parisienne', ...defaultTheme.fontFamily.sans]
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '4000': '4000ms',
        '6000': '6000ms',
      },
      transitionDelay: {
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
        '6000': '6000ms',
      }
    },
  },
  plugins: [],
}
