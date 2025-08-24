/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        oswald: ['oswald', 'sans-serif'],
      },

      transitionTimingFunction: {
      'step-start': 'steps(1, start)',
    },
    },
  },
  plugins: [],
}
