/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{pages,components}/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "100rem",
      },
      colors: {
        accent: "coral",
        "gray-1000": "#0d0f11",
        "gray-700": "#3a3c40",
        "gray-600": "#616670",
        "gray-500": "#81858d",
        "gray-400": "#9ea3ae",
        "gray-300": "#c5cad3",
        "slate-600": "#4a5866",
        "slate-700": "#34414d",
      },
    },
  },
  plugins: [],
};
