/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-lexend)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["aqua"],
  },
};
