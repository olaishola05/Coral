import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    },

    reset: {
      main: string;
    },

    text: {
      primary: {
        color: string;
        light: string;
        dark: string;
      }
    },
  }

  interface ThemeOptions {
    status?: {
      danger?: React.CSSProperties["color"];
    },

    reset?: {
      main?: React.CSSProperties["color"];
    },

    text?: {
      primary?: {
        color?: React.CSSProperties["color"];
        light?: React.CSSProperties["color"];
        dark?: React.CSSProperties["color"];
      }
    },
  }
}

export const theme = createTheme({
  text: {
    primary: {
      color: "#464356",
      light: "#5A5869",
      dark: "#312E43"
    }
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

})