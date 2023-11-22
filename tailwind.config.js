/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sofia: ["Sofia Pro", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": 'url("/src/assets/background/heroBackground.svg")',
        heroBg: 'url("/src/assets/background/scootspacebg.png")',
      },
      colors: {
        primary: "#3AAFA9",
        borderColor: "#00A79D",
      },
    },
  },
  plugins: [],
};
