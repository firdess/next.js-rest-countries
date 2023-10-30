/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        'dark-blue-element': 'hsl(209, 23%, 22%)',
        'very-dark-blue-bg': 'hsl(207, 26%, 17%)',
        'very-dark-blue-light-text': 'hsl(200, 15%, 8%)',
        'dark-gray-light-input': ' hsl(0, 0%, 52%)',
        'very-light-gray-bg': 'hsl(0, 0%, 98%)',
        'white': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}
