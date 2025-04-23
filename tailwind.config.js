 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      scrollBehavior: ['responsive'],
      fontFamily: {
        playFire: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#FF7900",
        secondary: "#fb923c",
      },
      container:{
        center: true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem",
        }
      }
    },
  },
  plugins: [],
}