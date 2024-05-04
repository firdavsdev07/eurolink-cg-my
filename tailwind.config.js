/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightBackground: "#FDF8EE",
        colorT: "rgb(226 232 240)",
        lightText: "rgb(248 250 252)",
        menuC: "rgba(0,0,0,0.4) ",
      },
    },
  },
  plugins: [],
};
