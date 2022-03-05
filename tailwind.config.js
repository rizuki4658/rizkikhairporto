const customs = {
  primary: {
    DEFAULT: '#F7C71F',
    50: '#FDF3D0',
    100: '#FDEEBD',
    200: '#FBE595',
    300: '#FADB6E',
    400: '#F8D146',
    500: '#F7C71F',
    600: '#D6A808',
    700: '#A07E06',
    800: '#6A5304',
    900: '#342902'
  }
}

module.exports = {
  content: [   
    "./pages/**/*.{js,ts,jsx,tsx}",   
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ...customs
      }
    },
  },
  plugins: [],
}
