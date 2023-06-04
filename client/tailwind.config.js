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
        textColor: "#803CBD",
        outColor: "#a500c3",
        errorColor: "#db271f",
        bgDark: "#70F5F9",
        darkest: "#00d0df",
        light: "#FDEFFF",
        bgLight: "#F6FFFE",
        placeholderColor: "#97c6fc",
        footerColor: "#8C85EF",
        darkColor: "#4113B7"
      },
      screens: {
        "xxl": {"max": "1680px"},
        "2xl": {"max": "1370px"},
        "xl": {"max": "1144px"},
        "lg": {"max": "1025px"},
        "md": {"max": "800px"},
        "sm": {"max": "589px"},
        "xsm": {"max": "489px"},
        "usm": {"max": "389px"},
        "ssm": {"max": "374px"},
        "fsm": {"max": "319px"},
        "mobile-2xl": "1370px",
        "mobile-xl": "1144px",
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
        ".btn-primary, .btn-primary-full, .btn-secondary, .btn-secondary-full, .btn-light, .btn-light-full, .btn-darkest, .btn-darkest-full": {
          backgroundColor: "#fff",
          color: "#4113b7",
          borderRadius: "50px",
          boxShadow: "2px 2px 3px #70F5F9",
          minWidth: "110px",
          height: "37px",
          fontSize: 18,
          fontWeight: "600",
          transitionDelay: ".07s",
          cursor: "pointer",
          textAlign: "center",
          paddingTop: "3.5px",

          "&:hover": {
            transition: "0.5s",
            backgroundColor: "#00e7f3",
            color: "#FDEFFF",
            fontWeight: "bold"
          },

          "&:disabled": {
            backgroundColor: "#aef8fa",
            color: "#04eef7",

            "&:hover": {
              transition: "0s",
              backgroundColor: "#aef8fa",
              color: "#04eef7",
              fontWeight: "600"
            }
          }
        },

        ".btn-primary": {
          backgroundColor: "#7570F9",
          color: "#F6FFFE",

          "&:hover": {
            backgroundColor: "#5D169D",
            fontWeight: "bold",
          }
        },

        ".btn-secondary": {
          backgroundColor: "#F970F4",
          boxShadow: "2px 2px 3px #a500c3",
          color: "#F6FFFE",

          "&:hover": {
            backgroundColor: "#a500c3",
            fontWeight: "bold",
          }
        },

        ".btn-darkest": {
          backgroundColor: "#00d0df",
          color: "#F6FFFE",

          "&:hover": {
            backgroundColor: "#00a4aa",
            fontWeight: "bold",
          }
        },

        ".active-link": {
          display: "block",
          textAlign: "center",
          margin: "1.5px 5px",
          borderRadius: "50px",
          backgroundColor: "#dffdfd",
          outlineStyle: "solid",
          outlineColor: "#70F5F9",
          outlineWidth: "2.5px",

          "&:hover": {
            transition: "0.5s",
            backgroundColor: "#00e7f3",
          },
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

        ".btn-primary-full, .btn-secondary-full, .btn-light-full, .btn-darkest-full": {
          minWidth: "100%"
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
            transform: "scale(1.05)",
            transition: "0.2s",
            color: "#F6FFFE",
            outlineColor: "#00e1f3",
            outlineWidth: "2px",
          }
        },

        ".navbar-outline, .small-icons": {
          outlineStyle: "solid",
          outlineColor: "transparent",
          borderRadius: "50%",
          boxShadow: "2px 2px 3px #70f4f9",

          "&:hover": {
            transform: "scale(1.1)",
            transition: "0.2s",
            color: "#F6FFFE",
            cursor: "pointer",
            outlineColor: "#04eef7",
            outlineWidth: "1.9px",
          }
        },

        ".small-icons": {
          backgroundColor: "#F6FFFE",
          borderRadius: "5px",
          paddingBlock: "6.5px",
          boxShadow: "0 0 5px #70f4f9",
          paddingInline: "3px",

          "&:hover": {
            transform: "scale(1.0)",
          }
        },

        ".input, .input-form": {
          color: "#4113b7",
          boxShadow: "2px 2px 3px #70f4f9",
          cursor: "pointer",
          minWidth: "160px",
          maxWidth: "350px",
          padding: "5px",
          borderRadius: "5px",

          "&:focus": {
            outlineColor: "#70F5F9",
            outlineWidth: "2px"
          }
        },

        ".input-form": {
          maxWidth: "580px",
          boxShadow: "0 0 5px #70f4f9",
          outlineStyle: "solid",
          outlineColor: "transparent",

          "&:hover": {
            transition: "0.2s",
            outlineColor: "#04eef7",
            outlineWidth: "1.9px",
          }
        },

        ".search-placeholder": {
          color: "#4113b7",
          borderRadius: "5px",
          boxShadow: "2px 2px 3px #70F5F9",
          marginLeft: "7px",
          paddingLeft: "5px",
          width: "186px",

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
          width: "200px",
          padding: "4px",
          cursor: "pointer",

          "&:hover": {
            transform: "scale(1.05)",
            transition: "0.5s"
          }
        },

        ".good-card": {
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          outlineStyle: "solid",
          outlineColor: "#04eef7",
          outlineWidth: "2px",
          borderRadius: "5%",
          minWidth: "200px",
          paddingBlock: "14px",
          paddingInline: "20px",
          cursor: "pointer",

          "&:hover": {
            transform: "scale(1.05)",
            transition: "0.5s"
          }
        },

        ".form": {
          display: "block",
          textAlign: "center",
          border: "solid #00d0df 0.5px",
          borderRadius: "10px",
          boxShadow: "0 0 5px #00d0df",
          maxWidth: "600px",
          margin: "0 auto",
          paddingBlock: "20px",
          paddingInline: "40px"
        },

        ".error": {
          color: "#db271f"
        }
      });
    })
  ],
};

