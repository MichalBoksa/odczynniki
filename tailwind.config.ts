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

    "primary2":"#ef4444",
          
    "secondary": "#f3f4f6",
          
    "accent": "#ffe4e6",
          
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
  }
},
  plugins: [require("daisyui")],
};