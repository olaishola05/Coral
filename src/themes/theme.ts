import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    text: {
      primary: {
        main: string;
        light: string;
        dark: string;
        neutral: string;
      }
    },

    snack: {
      snackError: string;
      snackSuccess: string;
      width: string;
      height: string;

    }
  }

  interface ThemeOptions {
    text?: {
      primary?: {
        main?: React.CSSProperties["color"];
        light?: React.CSSProperties["color"];
        dark?: React.CSSProperties["color"];
        neutral?: React.CSSProperties["color"];
      }
    },

    snack?: {
      snackError?: React.CSSProperties["color"];
      snackSuccess?: React.CSSProperties["color"];
      width?: string;
      height?: string;
    }
  }
}

export const theme = createTheme({
  text: {
    primary: {
      main: "#464356",
      light: "#5A5869",
      dark: "#312E43",
      neutral: "#6F6D7B",
    }
  },

  snack: {
    snackError: "#FFE8DA",
    snackSuccess: "#D6FCDA",
    width: "360px",
    height: "56px",
  },

  palette: {
    primary: {
      main: "#F93E6C",
    },
    secondary: {
      main: "#04385A",
    },
    error: {
      main: "#FF4339",
    },
    success: {
      main: "#2CCFBC",
    },
    warning: {
      main: '#EF980B'
    },
  },

  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(","),
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "0em",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "0em",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "0.01071em",
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "0.03333em",
    },
  },

  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {

            backgroundColor: 'white',
          },
        },
      },
    },
  },

})