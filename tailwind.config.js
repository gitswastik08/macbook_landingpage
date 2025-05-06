/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        macFont: ['macFont', 'sans-serif'],
        macFontSemibold: ['macFontSemibold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
