import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const imageAssets = [
  "/image-assets/full-yard.jpg",
  "/image-assets/back-yard.png",
  "/image-assets/small-space.png",
  "/image-assets/front-yard.webp",
  "/image-assets/curb-appeal.png",
  "/image-assets/outdoor-transformation.webp",
  "/image-assets/Botanical.webp",
  "/image-assets/premium.webp",
  "/image-assets/dont-see-package.jpg",
];

const dataObject = [
  {
    title: "Full Yard",
    description: "Redesign the landscaping and more for your entire property",
    image: imageAssets[0],
    price: "$1695",
  },
  {
    title: "Back Yard",
    description: "Refresh your backyard landscaping, patio, and more",
    image: imageAssets[1],
    price: "$1395",
  },
  {
    title: "Small Space",
    description: "Transform your small space into a beautiful oasis",
    image: imageAssets[2],
    price: "$995",
  },
  {
    title: "Front Yard",
    description: "Redesign your front yard landscaping",
    image: imageAssets[3],
    price: "$1095",
  },
  {
    title: "Curb Appeal",
    description: "Make your home the envy of the neighborhood",
    image: imageAssets[4],
    price: "$1795",
  },
  {
    title: "Outdoor Transformation",
    description:
      "Ready to fully transform your property? Redesign your home exterior and all landscaping",
    image: imageAssets[5],
    price: "$2495",
  },
  {
    title: "Botanical",
    description: "Add a touch of greenery to your home",
    image: imageAssets[6],
    price: "$895",
  },
  {
    title: "Premium",
    description:
      "Our most customizable design service, with extra hands-on support",
    image: imageAssets[7],
    price: "$3495",
  },
  {
    title: "Don't see a package?",
    description: "We can create a custom package for you",
    image: imageAssets[8],
    price: "Contact Us",
    contact: () => {
      // Replace this with the actual function to navigate to the contact page
      console.log("Navigating to contact page...");
    },
  },
];
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const buttonStyleBlack = {
  color: "white",
  backgroundColor: "black",
  border: "1px solid transparent",
  ":hover": {
    backgroundColor: "transparent",
    borderColor: "black",
    color: "black",
  },
};
const buttonStyleWhite = {
  color: "black",
  backgroundColor: "transparent",
  border: "1px solid black",
  ":hover": {
    backgroundColor: "transparent",
    borderColor: "black",
    color: "black",
  },
};

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h3"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Landscape Design Packages
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Our expert team of designers will help you create the outdoor
              space of your dreams. Whether refreshing the plants in your yard
              or planning a complete outdoor transformation, we have a package
              or you!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" sx={buttonStyleWhite}>
                Main call to action
              </Button>
              <Button variant="outlined" sx={buttonStyleBlack}>
                Secondary action
              </Button>
              <Button variant="outlined" sx={buttonStyleWhite}>
                Tertiary action
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {dataObject.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      height: 0,
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        objectFit: "cover",
                      }}
                      image={item.image}
                      alt={item.title}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography>{item.description}</Typography>
                  </CardContent>
                  <CardActions>
                    {item.contact ? (
                      <Button
                        variant="outlined"
                        size="large"
                        sx={{
                          color: "white",
                          backgroundColor: "black",
                          border: "1px solid transparent",
                          ":hover": {
                            backgroundColor: "transparent",
                            borderColor: "black",
                            color: "black",
                          },
                        }}
                        onClick={item.contact}
                      >
                        {item.price}
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        size="large"
                        sx={{
                          color: "white",
                          backgroundColor: "black",
                          border: "1px solid transparent",
                          ":hover": {
                            backgroundColor: "transparent",
                            borderColor: "black",
                            color: "black",
                          },
                        }}
                      >
                        Starting at {item.price}
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
