/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Adjust for app directory if using Next.js App Router
    './pages/**/*.{js,ts,jsx,tsx}', // For Pages Router
    './components/**/*.{js,ts,jsx,tsx}', // Include your components
  ],
  theme: {
    extend: {
      // Add custom Tailwind configurations if needed
      screens: {
        'xs': '320px', // Optional: Add custom breakpoint for 320px
      },
    },
  },
  plugins: [],
};