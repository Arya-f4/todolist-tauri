/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
