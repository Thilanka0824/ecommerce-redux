
import { createTheme } from "@mui/material/styles";



export const theme = createTheme({
  palette: {
    mode: "light", // or "dark"
    primary: {
      main: "#12100e",
      light: "#7986cb",
      dark: "#303f9f",
      extraDark: "#776871",
      contrastText: "#fff",
    },
    secondary: {
      main: "#0A1045",
      light: "#ff4081",
      dark: "#c51162",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    background: {
      default: "#f7f5f4",
      paper: "#F7F5F4",
    },
    text: {
      primary: "#23232",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    typography: {
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  },
});


// export default darkTheme;
