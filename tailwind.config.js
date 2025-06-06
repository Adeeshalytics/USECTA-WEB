/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': {
          500: '#ff5f1f',
        }
      },
    },
  },
  plugins: [],
}