/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradientFlow: "gradientFlow 12s ease infinite",
         crossFade: "crossFade 12s ease-in-out infinite",
      },
       
      keyframes: {
        crossFade: {
          "0%": {
            opacity: "0",
            transform: "translateY(15px)",
            filter: "blur(0)",
          },
          "5%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
          "30%": {
            opacity: "1",
          },
          "35%": {
            opacity: "0",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
          "100%": {
            opacity: "0",
          },
        },
        gradientFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "400": "400% 400%",
      },
      
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },

  },
  plugins: [],
}

