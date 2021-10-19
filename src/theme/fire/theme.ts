import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#F9D9C8",
      main: "#950101",
      dark: "#6B0012",
      contrastText: "#F4F6F6",
    },
    secondary: {
      light: "#C8F9E8",
      main: "#019595",
      dark: "#004056",
      contrastText: "#ffffff",
    },
    success: {
      main: "#73D92E",
      dark: "#3D9C17",
      light: "#EEFDD5",
    },
    error: {
      main: "#F2686C",
      dark: "#AE344D",
      light: "#FEEAE1",
    },
    common: {
      white: "#F4F6F6",
    },
  },

  typography: {
    h1: {
      fontWeight: "bold",
      fontSize: "4.5rem",
      lineHeight: "5.125rem",
    },
    h2: {
      fontWeight: "bold",
      fontSize: "3.25rem",
      lineHeight: "3.875rem",
    },
    h3: {
      fontWeight: "bold",
      fontSize: "2.625rem",
      lineHeight: "3.25rem",
    },
    h4: {
      fontWeight: "bold",
      fontSize: "2em",
      lineHeight: "2.625rem",
    },
    h5: {
      fontWeight: "bold",
      fontSize: "2.625rem",
      lineHeight: "3.25rem",
    },
    h6: {
      fontWeight: "bold",
      fontSize: "2.625rem",
      lineHeight: "3.25rem",
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: "2rem",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: "1.625rem",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.625rem",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.313rem",
    },
    overline: {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: "1.375rem",
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: "1.375rem",
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: "1.125rem",
    },
  },
});

export default theme;
