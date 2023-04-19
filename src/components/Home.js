import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Box maxWidth="xs" mt={3} sx={{ backgroundColor: "cyan" }}>
          <Typography variant="h2" align="center" component="h3" gutterBottom>
            Hello There
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
