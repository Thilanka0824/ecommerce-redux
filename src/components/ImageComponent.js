import React from "react";
import Box from "@mui/material/Box";

const styles = {
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('/image-assets/home-main-photo-lucky-shrub.jpeg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "800px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function ImageComponent({ children }) {
  return <Box sx={styles}>{children}</Box>;
}

export default ImageComponent;
