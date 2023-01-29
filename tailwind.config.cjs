/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "proxima-thin": ["Proxima-Nova-Thin", "sans-serif"],
        "proxima-light": ["Proxima-Nova-Light", "sans-serif"],
        "proxima-regular": ["Proxima-Nova-Regular", "sans-serif"],
        "proxima-semibold": ["Proxima-Nova-Semibold", "sans-serif"],
        "proxima-bold": ["Proxima-Nova-Bold", "sans-serif"],
        "proxima-black": ["Proxima-Nova-Black", "sans-serif"],
        "proxima-extrabold": ["Proxima-Nova-Extrabold", "sans-serif"],
        "code-pro": ["Code-Pro", "sans-serif"],
        "core-rhino": ["Core-Rhino", "sans-serif"],

      },
      maxWidth: {
        container: "1270px"
      },
      backgroundImage: {
        "discount": "url('./assets/discountbg.png')",
        "discount-mob": "url('./assets/discountbg_mob.png')",
        "map": "url('./assets/map.png')",
        "line": "url('./assets/line.png')",
        "line_mob": "url('./assets/mob_izo_line_black.svg')",
        "blue_line": "url('./assets/blue_line.png')",
        "blue_line_mob": "url('./assets/mob_izo_line_color.svg')",

      },
      screens: {
        "md+": "920px",
        "sm+-": "650px",
        "sm-": "550px",
        "sm+": "510px",
        "xs": "320px",
        "xs+": "440px",
        "xs-": "375px"
      }
    },
  },
  plugins: [],
}