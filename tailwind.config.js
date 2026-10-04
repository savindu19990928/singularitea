export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: '#14110f',
        forest: '#252c24',
        moss: '#2f3a2c',
        cream: '#f5f1dc',
        sand: '#ebe4c6',
        copper: '#8a3c12',
        amber: '#c99a5b',
        leaf: '#5b752b',
        plum: '#3b2a2c',
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
