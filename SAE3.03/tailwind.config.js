/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        sm: '0.594rem',
        base: '1rem',
        xl: '2.250rem',
        '2xl': '',
        '3xl': '',
        '4xl': '',
        '5xl': '5.031rem',

      },

      colors:{
        "greenbg": "#9EC369",
        "redbg": "#D65056",
        "bluebg": "#9DD8F7",
        "yellowbg": "#F7B64E",
      },

      fontFamily:{
        'overlock': ['Overlock','sans-serif']
      }




    },
  },
  plugins: [],
}

