/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '200px',
      'md': '768px',
      'lg': '1280px',
    },
    colors: {
      gray: '#1a1a21',
      dark: '#121212',
      white: '#FFFFFF',
      darkwhite: '#929292',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      spacing: {
        '7.5': '1.875rem', //30px
        '10.5': '2.625rem', //42px
        '13': '3.4375rem', //55px
        '13.5': '3.75rem', //60px
      },
      textShadow: {
        glow: '1px 0 10px #05FF00',
      },
      fontSize: {
        'xxs': '0.625rem', //10px
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

