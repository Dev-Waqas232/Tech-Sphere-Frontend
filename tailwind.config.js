/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f9f9f9",
        secondary: "#eaeaea",
        text: "#212121",
        main: "#32a852",
      },
      fontFamily: {
        primary: ["Open Sans", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
