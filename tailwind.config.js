/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      boxShadow: {
        'login-btn-shadow': '0px 2px 8px rgba(0, 0, 0, 0.15)',
      }
    }
  },
  plugins: [],
}
