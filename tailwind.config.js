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
        DEFAULT: '#939393',
        dark: '#707070',
      },
      green: '#1A586A'
    },
    // height: {
    //   '76': '4.75rem',
    //   extend: {},
    // },
    fontSize: {
      'xs': ['12px', '14px'],
      'sm': ['14px', '18px']
    },
    spacing: {
      '4': '0.25rem',
      '6': '0.375rem',
      '10': '0.625rem',
      '15': '0.9375rem',
      '22': '1.375rem',
      '30': '1.875rem',
      '40': '2.5rem',
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