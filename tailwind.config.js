/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        slide: 'slide 0.3s ease-in-out',
      },
      dropShadow: {
        'custom': '0 6px 5px #979797',
      },
      fontFamily: {
        poppings: ['Poppins', 'sans-serif']
      }

    },
  },
  plugins: [],
}

