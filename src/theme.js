import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  pallette: {
    mode: "light",
    primary: {
      main: "#89f54d",
    },
    secondary: {
      main: "#bb4df5",
    },
    error: {
      main: red.A400,
    },
  },
});
export default theme;
