import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import KeepMountedModal from "./KeepMountedModal";
// import {ThemeToggle} from "../components/ThemeToggle";
import { useMediaQuery } from "@mui/material";
import KeepMountedModalRegister from "./KeepMountedModalRegister";

const drawerWidth = 240;
const navItems = ["Home", "Design Packages"];
const navItemsDrawer = ["Home", "Design Packages", "Register", "Login"];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography> */}
      <Divider />

      <List>
        {navItemsDrawer.map((item) => (
          <ListItem key={item} disablePadding>
            <Link
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              style={{
                textDecoration: "none",
                width: "100%",
              }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} sx={{ color: "black" }} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("sm")); // theme is a prop that is passed in from the parent component. this is how we access it. breakpoints is a property of theme. up is a method of breakpoints. sm is a parameter of up.

  return (
    <Box sx={{ display: "flex", marginTop: -6 }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          component="nav"
          color="primary"
          sx={{
            backgroundColor: "#ffffff",
          }}
        >
          <Toolbar>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }} // this is for the hamburger menu. this line determines when it shows up
            >
              <MenuIcon />
            </IconButton>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Box
                component="img"
                sx={{
                  height: { xs: "48px", md: "64px" },
                  display: { xs: "none", md: "flex" },
                  mr: 1, //mr = margin-right
                  margin: 2,
                  objectFit: "contain", // this
                }}
                alt="The house from the offer."
                src="/image-assets/lucky-shrub-green.png"
              />
            </Typography>
            {/* Added new code for theme switch */}
            {/* <ThemeToggle/> */}

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => {
                const link = item === "Home" ? "" : item.toLowerCase();
                return (
                  <Link
                    to={`/${link}`}
                    key={item}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      sx={{
                        color: "#243010",
                        fontSize: "large",
                        fontFamily: "sans-serif",
                      }}
                      variant="text"
                    >
                      {item}
                    </Button>
                  </Link>
                );
              })}
            </Box>
            {isDesktop && (
              <Link style={{ textDecoration: "none" }}>
                <KeepMountedModal /> {/* this is the login button */}
              </Link>
            )}
            {isDesktop && (
              <Link style={{ textDecoration: "none" }}>
                <KeepMountedModalRegister />
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
