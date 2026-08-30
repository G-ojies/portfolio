/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    container: {
      padding: {
        DEFAULT: '30px',
      },
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        github: '#171515',
        twitter: '#00acee',
        telegram: '#229ed9',
        igorange: '#fa7e1e',
        igpurple: '#962fbf',
      },
      fontFamily: {
        primary: ['Raleway', 'sans-serif'],
        signature: ['Great Vibes', 'cursive'],
        kurale: ['Kurale', 'serif'],
      },
      backgroundImage: {
        about_new: "url('./assets/about.jpg')",
        service_new: "url('./assets/service.svg')",
      },
    },
  },
  plugins: [],
};
