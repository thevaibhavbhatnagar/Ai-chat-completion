/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontSize: {
        'sub': '0.6rem',
      },
      fontFamily: {
        inter: ["Inter var", "sans-serif"],
      },
      boxShadow: {
        card: "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)",
        cardhover:
          "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)",
      },
      backgroundColor: {
        dark: 'var(--bg-dark)',
      },
      textColor: {
        dark: 'var(--text-dark)',
      },
       
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      
    },
  },
  plugins: [],
  
   
};
