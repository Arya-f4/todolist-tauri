/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#F5F7FA !important', // replace with your desired color
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
