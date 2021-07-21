module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'back-404': "url('assets/img/404.png')"
      }),
      fontSize: {
        '10xl': '10rem',
        '11xl': '11rem',
        '12xl': '12rem',
      }
    },
    colors:{
      primary: '#3d69e1',
      secondary: '#88aaff',
      background: '#f1f3f4',
      H1: '#222222',
      H2: '#5f6368',
      H3: '#6f6f70',
      positive: '#79c325',
      negative: '#ca0036',
      white: '#ffffff'
    },
    fontFamily: {
      body: ['Poppins']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
