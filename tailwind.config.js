/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./static/**/*.{html,js}",
    "./assets/**/*.{js,css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#334155',
        accent: '#0e6fff',
        'accent-default': '#0e6fff',
        'accent-hover': '#0e6fff',
        'accent-hover-title': '#2013db',
        'page-bg': '#f2f2f2',
        'dark-surface': '#0f172a',
        'text-ondark': '#f8fafc',
        border: '#e2e8f0',
      },
      fontFamily: {
        sans: ['"Oswald"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}