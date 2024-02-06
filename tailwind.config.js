/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "daftar.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark': '#092635',
      },
    },
  },
  plugins: [],
}

