export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tech: {
          50: '#f0fcff',
          100: '#d9fbff',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#03636f'
        }
      },
      boxShadow: {
        neon: '0 6px 30px rgba(0, 234, 255, 0.12)'
      }
    },
  },
  plugins: [],
};
