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
    spacing: {
      '30': '1.875rem',
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
