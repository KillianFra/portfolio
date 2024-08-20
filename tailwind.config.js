/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ct-black": "#121212",
        "ct-yellow": "#BAA43F",
        "ct-blue": "#4040BB",
        "ct-hover-yellow": "",
        "ct-hover-blue": "",
      },
      fontFamily: {
        Sansita: ["Libre Franklin", "sans-serif"],
      },
      backgroundImage: {
          'watch': "url('/img/image1.jpg')",
      }
    },
  },
  plugins: [],
};
