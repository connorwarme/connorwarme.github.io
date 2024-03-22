/** @type {import('tailwindcss').Config} */
export default {
  content: ['.index.html', './src/*.{html,jsx}', './src/**/*.{html,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        big: ['BigShoulders'],
        body: ['Hedvig'],
        play: ['Playfair'],
        'play-italic': ['Playfair Italic'],
        cairo: ['Cairo'],
        yrsa: ['Yrsa'],
        tourney: ['Tourney'],
        choko: ['Choko'],
        grenze: ['Grenze'],
      },
      colors: {
        'wave-spray': '#d2e6ee',
        'light-blue': '#b5d4df',
        glacier: '#afd2e0',
        'sky-blue': '#8abdcf',
        'bay-blue': '#72b0c3',
        moonstone: '#62a4b5',
        'bay-current': '#3b7681',
        gunmetal: '#0f242d',

        'tree-green': '#255843',
        'myrtle-green': '#417176',
        'dark-forest': '#113932',
        'deep-forest': '#1b3a35',
        'midnight-green': '#1f434a',
      },
      keyframes: {
        miniBounce: {
          '0%, 50%, 100%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '25%, 75%': {
            transform: 'translateY(-15%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        miniBounce: 'miniBounce 1.5s ease-in-out 1.5',
      },
    },
  },
  plugins: [],
}
