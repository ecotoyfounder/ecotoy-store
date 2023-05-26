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
        darkColor: "#4113B7",
        light: "#FDEFFF",
        textColor: "#803CBD",
        bgDark: "#70F5F9",
        bgLight: "#F6FFFE",
        footerColor: "#8C85EF",
        placeholder: "#97c6fc"
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
          fontWeight: "600",
          transitionDelay: ".07s",
          cursor: "pointer",
          textAlign: "center",

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
          fontWeight: "600",
          transitionDelay: ".07s",
          cursor: "pointer",
          textAlign: "center",
          paddingTop: "3.5px",

          "&:hover": {
            backgroundColor: "#5D169D",
            fontWeight: "bold",
          }
        },
        ".btn-light": {
          backgroundColor: "#fff",
          color: "#4113b7",
          borderRadius: "50px",
          minWidth: "110px",
          height: "37px",
          fontSize: 18,
          fontWeight: "600",
          transitionDelay: ".07s",
          cursor: "pointer",
          textAlign: "center",
          paddingTop: "3.5px",
          outlineStyle: "solid",
          outlineColor: "#70F5F9",
          outlineWidth: "2px",

          "&:hover": {
            backgroundColor: "#00e7f3",
            color: "#FDEFFF",
            fontWeight: "bold"
          }
        },
        ".btn-arrow-dark": {
          backgroundColor: "#7570F9",
          color: "#F6FFFE",
          borderRadius: "5px",
          width: "35px",
          height: "35px",
          fontSize: 16,
          fontWeight: "600",
          cursor: "pointer",
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
          fontWeight: "600",
          cursor: "pointer",
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
        },
        ".img-outline": {
          outlineStyle: "solid",
          outlineColor: "#70f4f9",
          outlineWidth: "1px",
          borderRadius: "50%",

          "&:hover": {
            transform: "scale(1.1)",
            transition: "0.2s",
            color: "#F6FFFE",
            outlineColor: "#00b9c3",
            outlineWidth: "2px",
          }
        }
      })
    })
  ],
}

