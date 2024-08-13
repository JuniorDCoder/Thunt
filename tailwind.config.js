/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5801E5',
        'secondary': '#FFC30D',
        'tertiary': '#E15636',
        'quaternary': '#2EEEDA',
      },
    },
  },
  plugins: [],
}

