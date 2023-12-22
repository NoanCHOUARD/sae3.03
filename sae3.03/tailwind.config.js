/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        fond : 'rgb(var(--color-fond) / 0.5)',
        "greenbg": "#9EC369",
        "redbg": "#D65056",
        "greendarkbg":"#019645",
        "bluebg": "#9DD8F7",
        "yellowbg": "#F7B64E",
        fondlight : 'rgb(var(--color-fond) / 0.2)',

      },
      fontFamily:{
        font-family: ['Overlock', sans-serif];
      }

    },
  },
  plugins: [],
}