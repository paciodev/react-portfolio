module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pacio': {
          100: '#1A1B1D',
          200: '#202020',
          300: '#2C74FE',
          400: '#ff0000',
          500: '#3a5acf',
          600: '#f7d200',
          700: '#f3f4f5'
        },
      },
      fontFamily: {
        'bigTextPacio': ['Water Brush', 'cursive']
      }
    },
  },
  plugins: [],
  
}