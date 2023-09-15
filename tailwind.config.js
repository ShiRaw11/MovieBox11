

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'rose':'#be123c',
      'hover':'#be185d',
      'light-red':'#f9a8d4',
      'gray':'#666666',
      'light-gray':'#9ca3af',
      'yellow':'#fde047',
      'red':'#ffa500',
      'desc':'#404040',
      'icon-bg':'#f3f4f680',
      'redish':'#fda4af',
      '400':'#fda4af',
      '200':'#fecdd3',
      'error':'#b91c1c',
      'blue':'#111827'
      
    },
    extend: {
      backgroundImage:{
        'poster':"url('./src/assets/Poster.png')"      }
      
    },
  },
  plugins: [],
}