/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{pages,components}/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
      colors: {
        accent: "orange",
      },
    },
  },
  plugins: [],
};
