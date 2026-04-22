/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradientFlow: "gradientFlow 12s ease infinite",
      },
      keyframes: {
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

