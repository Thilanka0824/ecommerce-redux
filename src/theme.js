import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bb4df5",
    },
    secondary: {
      main: "#89f54d",
    },
    error: {
      main: red.A400,
    },
  },
});
export default theme;


