/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#ED931E',
      'secondary': '#6C00F',
      'card': '#FFF3E5',
      'header': '#3C3C3C',
      'background': '#FCFEFE',
      'border': '#FBC98F',
      'border-card': '#F6F6F6',
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif'],
     
    },
  },
  plugins: [require('flowbite/plugin'),
  require('@tailwindcss/container-queries'),
    require('@tailwindcss/aspect-ratio'),
  ],
}