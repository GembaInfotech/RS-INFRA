/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        'tv': '1920px', // Example of adding a custom breakpoint for large screens (TV)
      },
    },
  },
  plugins: [],
}

