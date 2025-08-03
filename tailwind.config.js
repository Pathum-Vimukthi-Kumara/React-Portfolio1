/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-primary': '#7F5AF0',
        'purple-secondary': '#A259F7',
        'purple-background': '#1A0036',
        'purple-dark': '#2d1457',
        'purple-light': '#E6D6FA',
        'purple-accent': '#bfc8e6',
        'golden': '#ffd700',
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(135deg, #1a0036, #2d1457)',
        'purple-card': 'linear-gradient(135deg, rgba(45, 20, 87, 0.92), rgba(26, 0, 54, 0.97))',
      },
    },
  },
  plugins: [],
}

