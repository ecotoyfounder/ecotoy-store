const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7570F9",
        secondary: "#F970F4",
        darkColor: "#5D169D",
        light: "#FDEFFF",
        textColor: "#803CBD",
        bgDark: "#70F5F9",
        bgLight: "#F6FFFE",
        footerColor: "#8C85EF"
      }
    },
  },
  plugins: [
    plugin(function ({addComponents}) {
      addComponents({
        ".btn-primary": {
          backgroundColor: "#7570F9",
          color: "#F6FFFE",
          borderRadius: "50px",
          minWidth: "110px",
          height: "37px",
          fontSize: 18,
          transitionDelay: ".07s",

          "&:hover": {
            backgroundColor: "#5D169D",
            fontWeight: "bold",
          }
        },
        ".btn-secondary": {
          backgroundColor: "#F970F4",
          color: "#F6FFFE",
          borderRadius: "50px",
          minWidth: "110px",
          height: "37px",
          fontSize: 18,
          transitionDelay: ".07s",

          "&:hover": {
            backgroundColor: "#5D169D",
            fontWeight: "bold",
          }
        },
        ".btn-light": {
          backgroundColor: "#FDEFFF",
          color: "#803CBD",
          borderRadius: "50px",
          minWidth: "110px",
          height: "37px",
          fontSize: 18,
          transitionDelay: ".07s",

          "&:hover": {
            backgroundColor: "#F970F4",
            color: "#FDEFFF",
            fontWeight: "bold",
          }
        },
        ".btn-arrow-dark": {
          backgroundColor: "#7570F9",
          color: "#F6FFFE",
          borderRadius: "5px",
          width: "35px",
          height: "35px",
          fontSize: 16,
          transitionDelay: ".07s",

          "&:hover": {
            backgroundColor: "#5D169D",
            fontWeight: "bold",
          }
        },
        ".btn-arrow-light": {
          backgroundColor: "#F6FFFE",
          color: "#803CBD",
          borderRadius: "5px",
          width: "25px",
          height: "25px",
          transitionDelay: ".07s",

          "&:hover": {
            backgroundColor: "#5D169D",
            fontWeight: "bold",
            color: "#F6FFFE",
          }
        },
        ".nav-img": {
          width: "30px",
          marginX: "10px"
        }
      })
    })
  ],
}

