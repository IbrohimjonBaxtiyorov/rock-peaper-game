/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        triangle:"url(../img/triangle.svg)"
      },
      colors:{
        "basic-bg":'#1F3757'
      },
      gradientColorStops:{
        'stop':"#131537"
      }
    },
  },
  plugins: [require('daisyui'),],
}

