import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import {theme} from "./theme";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { ThemeToggle } from "./components/ThemeToggle";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
    {/* <ThemeToggle theme={darkTheme}> */}
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
   {/* </ThemeToggle> */}
    </ThemeProvider>
  </React.StrictMode>
);
