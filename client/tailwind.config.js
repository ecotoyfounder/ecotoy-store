const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7570F9",
        secondary: "#F970F4",
        darkest: "#00d0df",
        darkColor: "#4113B7",
        light: "#FDEFFF",
        textColor: "#803CBD",
        bgDark: "#70F5F9",
        bgLight: "#F6FFFE",
        footerColor: "#8C85EF",
        placeholderColor: "#97c6fc"
      },
      screens: {
        "xxl": {"max": "1680px"},
        "2xl": {"max": "1370px"},
        "xl": {"max": "1120px"},
        "lg": {"max": "1025px"},
        "md": {"max": "800px"},
        "sm": {"max": "589px"},
        "xsm": {"max": "489px"},
        "usm": {"max": "389px"},
        "fsm": {"max": "319px"},
        "mobile-2xl": "1370px",
        "mobile-xl": "1120px",
        "mobile-lg": "1025px",
        "mobile-md": "800px",
        "mobile-sm": "589px",
        "mobile-xsm": "489px",
        "mobile-usm": "389px",
        "mobile-fsm": "319px"
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

        ".btn-light, .btn-light-full": {
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

        ".btn-light-full": {
          minWidth: "100%"
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
            outlineColor: "#00e1f3",
            outlineWidth: "2px",
          }
        },

        ".navbar-outline": {
          outlineStyle: "solid",
          outlineColor: "transparent",
          borderRadius: "50%",
          boxShadow: "2px 2px 3px #70f4f9",

          "&:hover": {
            transform: "scale(1.1)",
            transition: "0.2s",
            color: "#F6FFFE",
            outlineColor: "#04eef7",
            outlineWidth: "1.9px",
          }
        },

        ".search-placeholder": {
          color: "#4113b7",
          marginLeft: "7px",
          paddingLeft: "5px",
          width: "186px",
          borderRadius: "5px",

          "&:focus": {
            outlineColor: "#70F5F9",
            outlineWidth: "2px",
          }
        },

        ".good-img": {
          borderRadius: "5%",
          boxShadow: "5px 5px 9px #70F5F9",
          cursor: "pointer",
          outlineStyle: "solid",
          outlineColor: "transparent",
          maxWidth: "350px",

          "&:hover": {
            transform: "scale(1.05)",
            transition: "0.5s",
            outlineColor: "#04eef7",
            outlineWidth: "2px",
          }
        },

        ".review-card": {
          outlineStyle: "solid",
          outlineColor: "#04eef7",
          outlineWidth: "2px",
          borderRadius: "5%",
          width: "225px",
          textAlign: "center",
          padding: "4px",
          cursor: "pointer",

          "&:hover": {
            transform: "scale(1.05)",
            transition: "0.5s"
          }
        }
      });
    })
  ],
};

