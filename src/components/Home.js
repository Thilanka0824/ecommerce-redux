import React from "react";
import { Box, Button, Container, Typography, createTheme } from "@mui/material";
import TemporaryDrawer from "./TemporaryDrawer";
import KeepMountedModal from "./KeepMountedModal";
import { Link } from "react-router-dom";
import ImageComponent from "./ImageComponent";
import { ThemeProvider } from "@emotion/react";

const buttonStyleHomePageLight = {
  color: "black",
  backgroundColor: "white",
  // border: "1px solid black",
  borderRadius: "15px",
  textDecoration: "none",
  padding: "18px 40px",
  opacity: 0.85,
  mb: 1,
  ":hover": {
    backgroundColor: "#4E5A44",
    borderColor: "black",
    color: "white",
  },
};

const buttonStyleHomePageDark = {
  color: "black",
  // border: "1px solid black",
  backgroundColor: "black",
  borderRadius: "15px",
  textDecoration: "none",
  padding: "18px 40px",
  opacity: 0.85,
  mb: 1,
  ":hover": {
    backgroundColor: "#4E5A44",
    borderColor: "black",
    color: "white",
  },
};

const theme = createTheme()

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <main style={{ backgroundColor: "#F7f5f4", marginTop: -20 }}>
        <ImageComponent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              height: "100%",
              padding: "0 50px",
            }}
          >
            <Typography variant="h2" sx={{ textAlign: "center", mb: 5}}>Your Dream Yard Starts Here</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 2, // Add some margin-top for spacing
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={buttonStyleHomePageLight}
              >
                <Link
                  to="/design%20packages"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Explore Design Packages
                </Link>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={buttonStyleHomePageDark}
              >
                <Link
                  to="/schedule-a-call"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Schedule a Call (It's Free!)
                </Link>
              </Button>
            </Box>
          </Box>
        </ImageComponent>
      </main>
    </ThemeProvider>
  );
};

export default Home;
