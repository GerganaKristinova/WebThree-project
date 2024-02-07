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
      lightgray: '#31303F',
      gray: '#1A1A21',
      rock: '#23232B',
      dark: '#121212',
      charcoal: '#171533',
      white: '#FFFFFF',
      pearlwhite: '#ECEAE3',
      darkwhite: '#929292',
      red: '#FF0000',
      green: '#05FF00',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      spacing: {
        '3.5': '0.9375rem', //15px
        '7.5': '1.875rem', //30px
        '10.5': '2.625rem', //42px
        '13': '3.4375rem', //55px
        '13.5': '3.75rem', //60px
        '17': '4.0625rem', //65px
        '25': '6.25rem', //100px
        '85': '20.9375rem', //335px
      },
      textShadow: {
        glow: '1px 0 10px #05FF00',
      },
      fontSize: {
        'xxs': '0.625rem', //10px
        's': '0.9375rem', //15px
      },
      letterSpacing: {
        'long': '0.25em'
      },
      boxShadow: {
        'glow': '0 0 10px',
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

