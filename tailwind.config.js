/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".index.html",
    "./src/*.{html,jsx}", 
    "./src/**/*.{html,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'wave-spray': '#d2e6ee',
        'light-blue': '#b5d4df',
        'glacier': '#afd2e0',
        'sky-blue': '#8abdcf',
        'bay-blue': '#72b0c3',
        'moonstone': '#62a4b5',
        'bay-current': '#3b7681',
        'gunmetal': '#0f242d',
        
        'tree-green': '#255843',
        'myrtle-green': '#417176',
        'dark-forest': '#113932',
        'deep-forest': '#1b3a35',
        'midnight-green': '#1f434a',
      },
    },
  },
  plugins: [],
};
