import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Switch from "@mui/material/Switch";

export const ThemeToggle = ({ children, theme }) => {
  const [currentTheme, setTheme] = useState(theme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === theme ? theme : theme));
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Switch checked={currentTheme === theme} onChange={toggleTheme} />
      {children}
    </ThemeProvider>
  );
};
