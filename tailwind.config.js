/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '280px',
      'md': '768px',
      'lg': '1100px',
    },
    colors: {
      lightgray: '#31303F',
      gray: '#1A1A21',
      iron: '#666666',
      rock: '#23232B',
      dark: '#121212',
      charcoal: '#171533',
      white: '#FFFFFF',
      pearlwhite: '#ECEAE3',
      darkwhite: '#929292',
      red: '#FF0000',
      green: '#05FF00',
    },
    fontSize: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      spacing: {
        '3.5': '0.9375rem', //15px
        '4.5': '1.125rem', //18px
        '7.5': '1.875rem', //30px
        '8.5': '2.1875rem', //35px
        '10.5': '2.625rem', //42px
        '13': '3.4375rem', //55px
        '13.5': '3.75rem', //60px
        '17': '4.0625rem', //65px
        '25': '6.25rem', //100px
        '30': '7.5rem', //120px
        '46': '11.5625rem', //185px
        '85': '20.9375rem', //335px
      },
      textShadow: {
        glow: '1px 0 10px #05FF00',
      },
      fontSize: {
        'xxs': '0.625rem', //10px
        's': '0.9375rem', //15px
      },
      boxShadow: {
        'glow': '0 0 10px',
      },
      rotate: {
        '35': '35deg',
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

