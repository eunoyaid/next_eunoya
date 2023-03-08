/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      variants: {
        height: ['responsive', 'hover', 'focus']
    }
    },
    colors: {
      primary: "#ED931E",
      darkPrimary: "#c28948",
      secondary: "#FFF3E5",
      card: "#FFF3E5",
      header: "#3C3C3C",
      background: "#FCFEFE",
      border: "#FBC98F",
      "border-card": "#F8F8F8",
      textPrimary: "#3C3C3C",
      textSecondary: "#676565",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/aspect-ratio"),
    // require('@tailwindcss/forms'),
  ],
};
