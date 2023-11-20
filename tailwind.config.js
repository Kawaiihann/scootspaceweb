/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sofia: ['Sofia Pro', 'sans-serif'],
    },
    extend: {
      colors: {
      primary: '#3AAFA9',
      borderColor: 'rgba(0, 167, 157, 0.23)'
    }
    },
    
  },
  plugins: [],
}