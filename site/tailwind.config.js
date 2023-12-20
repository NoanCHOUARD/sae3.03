/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        fond : 'rgb(var(--color-fond) / 0.5)',
      },
    },
  },
  plugins: [],
}