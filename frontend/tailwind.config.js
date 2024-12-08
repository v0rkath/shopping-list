/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: "Cormorant Garamond"
      },
      dropShadow: {
        img: '0px -50px 50px rgba(0,0,0,0.15)'
      },
      maxWidth: {
        '8xl': '90rem'
      },
      colors: {
        'sage': '#DDEEE8'
      }
    },
  },
  plugins: [],
}

