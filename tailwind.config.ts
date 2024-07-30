/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
      themes: [
        {
          mytheme: {
          
    "primary": "#e11d48",

    "primary-content": "#e4252d",
          
    "secondary": "#f3f4f6",
    "secondary-content": "#8C92AC",

          
    "accent": "#C1C5D2",
          
    "neutral": "#be123c",
          
    "base-100": "#ffffff",
          
    "info": "#0000ff",
          
    "success": "#00ff00",
          
    "warning": "#00ff00",
          
    "error": "#ff0000",
  
          },
          
        },

        
        
      ],
},
theme: {
  
  extend: {
    flex: {
      '2': '2 2 0%',
      '3': '3 3 0%'
    }
  },

  colors:{
    "jetblack": "#212121",
    "cream": "#FFFFF5",
    "dark-white": "#f1f1f1",
    "ivory": "#F9FBF7",
    "dark-gray": "#747474",
    "dark-ivory": "#E2DED0",
    "slide-gray": "#A5CFE3",
    "slider":"#D9DED8",
  
  }
},
  plugins: [require("daisyui")],
};