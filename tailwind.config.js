module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#458FF6',
        secondary: '#F3F7FF',
        'font-dark': '#1F1534',
        'font-light': '#7D7987',
        'gradient-light': '#6CBCFC',
        'gradient-dark': '#458DFC',
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
      fontSize: {
        '4.5xl': '2.5rem',
      },
      width: {
        '12/25': '48%',
        '13/25': '52%',
      },
    },
  },
  plugins: [],
};
