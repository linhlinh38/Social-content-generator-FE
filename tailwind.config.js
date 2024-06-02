/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          1: "#00214F",
          2: "#344054",
        },
      },
    },
  },
  plugins: [],
};
