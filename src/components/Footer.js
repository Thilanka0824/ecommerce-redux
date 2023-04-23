import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Lucky Shrub
      </Link>{"/"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
     
      <Box
        component="footer"
        sx={{
          py: 3, // py is shorthand for padding-top and padding-bottom
          px: 2, // px is shorthand for padding-left and padding-right
          mt: "auto", // mt is shorthand for margin-top
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.primary.extraDark
              : theme.palette.grey[800],
              borderTop: "15px solid #000000",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4"
          >
            Outdoor living, reimagined
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
