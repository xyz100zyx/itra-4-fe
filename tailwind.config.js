/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      width: {
        'toolbar': '360px',
      },
      minWidth: {
        'mincell': '200px',
        'mincell-md':'120px',
        'mincell-sm': '40px'
      },
      colors: {
        'checkboxreg': "#eee",
        'checkboxhov': "#bbb",
        'checkboxcheck': '#2196F3',
      },
    },
  },
  plugins: [],
}
