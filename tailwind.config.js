/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          600: '#26231E',
          500: '#43403B',
          400: '#75716B',
          300: '#DAD6D1',
          200: '#EFEDEB',
          100: '#F9F8F6',
        },
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}


