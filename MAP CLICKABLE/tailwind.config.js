/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'bg-map':"url(/assets/MAPBG.png')",
      },
      colors: {
        fond : 'rgb(var(--color-fond) / 0.5)',
        fondlight : 'rgb(var(--color-fond) / 0.2)',
        
      }
    },
  },
  plugins: [],
}