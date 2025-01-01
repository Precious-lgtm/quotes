/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}", // Adjust this based on your file structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#175CFF',
        secondary: '#1A1A21',
        background: '#E3EAFB',
        accent: '#141460',
        lightgray: '#F7F9FC',
        gray: '#F0F2F5',
        lightgrey: '#F9FAFB',
        darkgray: '#344054',
        darkblue: '#1D2739',
        bluegray: '#667185',
        deepblue: '#101928',
        tertiary: '#555E68',
        fadegray: '#98A2B3',
        deepgray: '#475367',
        red: '#D42620',
        innergray: '#E9E9E9',
        lightpink: '#FFECE5',
        bordergray: '#E4E7EC',
        inputgray: '#D0D5DD',
        orange: '#F56630'
      },
      fontFamily: {
        "satoshi": ['Satoshi'],
        "sans": ['"Roboto"', "Arial", "sans-serif"]
      },
      fontSize: {
        'xxs': '10px',
      }
    },
  },
  plugins: [],
}

