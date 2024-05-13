/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      textOpacity: ['group-hover'],
      textColor: ['group-hover'],
    },
  },
  theme: {
    extend: {
      colors: {
        'bg-cream': '#ece7e1',
        'text-heading': '#212020',
        'text-sub': '#393736',
        'bg-black': '#1a1919',
        'text-white': '#ece7e1',

      },
      fontFamily: {
        "montserrat": ["Montserrat", 'sans-serif'],
        "grandSlang": ["GrandSlang", 'serif'],
        "plusJakarta": ["Plus Jakarta Sans", 'sans-serif']
      },
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11)  2s',
      },
      keyframes: {
        typewriter: {
          '0%': {
            left: '0'
          },

          '100%': {
            left: '100%',
            background:'none'
          },

        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}

