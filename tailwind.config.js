/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ct-black": "#0B0B0B",
        "ct-yellow": "#BAA43F",
        "ct-blue": "#4040BB",
        "ct-hover-yellow": "",
        "ct-hover-blue": "",
      },
      fontFamily: {
        Sansita: ["Sansita", "sans-serif"],
      },
    },
  },
  plugins: [],
};
