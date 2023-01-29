/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{pages,components}/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "100rem",
      },
      colors: {
        accent: "orange",
        "gray-1000": "#08090b",
      },
    },
  },
  plugins: [],
};
