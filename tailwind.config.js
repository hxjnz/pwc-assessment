/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
    },
  },
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
}
