/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        "customGray": "#F7F7F7",
        "customBlack" : "#291C00",
        "custom1": "#FFEDD8",
        "custom2": "#FFE6E6",
        "custom3": "#86A7FC",
      },
    },
  },
  plugins: [],
}
