/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'brand': '#fafafa',
      'border': '#dbdbdb',
      'white': '#fff',
      'black': '#000',
      'purple':  '#d312c5',
      'orange': '#f08863',
      'yellow': '#f4c505',
      'blue': '#4c96f6',
      'gray': '#8e8e8e',
      'light-gray': '#cacaca',
      'light-black': 'rgba(0,0,0,0.3)',
    },
    extend: {},
  },
  plugins: [],
}
