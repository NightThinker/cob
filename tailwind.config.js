module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: '#FF6F61',
      white: {
        light: '#FCFCFC',
        DEFAULT: '#F9F9F9',
        dark: '#E5E5E5',
      },
      black: {
        DEFAULT: '#000',
        light: '#484848'
      },
      gray: {
        light: '#A4A4A4',
        md: '#F5F5F5',
        DEFAULT: '#939393',
        dark: '#707070',
      },
      grey: {
        border: '#DEDEDE',
        light: '#A0A0A0',
      },
      green: '#1A586A'
    },
    gridTemplateColumns: {
      '4': 'repeat(4, minmax(0, 1fr))',
      'cart': '3fr repeat(3, 1fr)',
    },
    fontSize: {
      'xs': ['12px', '14px'],
      'sm': ['14px', '18px'],
      'base': ['16px', '14px'],
      'lg': ['18px', '22px'],
      'xl': ['20px', '26px'],
      '2xl': ['28px', '36px'],
    },
    spacing: {
      '4': '0.25rem',
      '6': '0.375rem',
      '10': '0.625rem',
      '15': '0.9375rem',
      '16': '1rem',
      '18': '1.125rem',
      '20': '1.25rem',
      '22': '1.375rem',
      '25': '1.5625rem',
      '28': '1.75rem',
      '38': '2.375rem',
      '30': '1.875rem',
      '40': '2.5rem',
      '48': '3rem',
      '50': '3.125rem',
      '54': '3.375rem',
      '76': '4.75rem',
      '100': '6.25rem',
    },
    extend: {
      fontFamily: {
        'boon': ['Boon']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
