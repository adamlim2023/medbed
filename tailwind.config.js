/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        theme: ["Poppins", "sans-serif"],
        mellon: ["PF Mellon"],
        title: ["Bebas Neue", "sans-serif"],
        sans: ["Source Sans 3", "sans-serif"],
      },
    },
  },
  plugins: [],
};
