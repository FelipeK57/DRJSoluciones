/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-bg': 'fade-in 500ms ease-in-out forwards',
        'fade-in-content': 'fade-in 1s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

