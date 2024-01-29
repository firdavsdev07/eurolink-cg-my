/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightBackground: "#FDF8EE",
        colorT: "#fbc210",
        lightText: "#959595",
        menuC:"rgba(7,6,6,0.5) "
      },
    },
  },
  plugins: [],
};
