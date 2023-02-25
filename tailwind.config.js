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
        "gray-1000": "#08090b",
        "gray-700": "#2d384e",
        "gray-600": "#58647b",
        "gray-500": "#788295",
        "gray-400": "#95a1b9",
        "gray-300": "#bcc7dd",
      },
    },
  },
  plugins: [],
};
