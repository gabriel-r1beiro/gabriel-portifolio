/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        t: '0px 1px 15px 2px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
