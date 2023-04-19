import React from "react";
import { Outlet } from "react-router-dom";
import DrawerAppBar from "../components/NavBar";
import Footer from "../components/Footer";

const GlobalLayout = () => {
  return (
    <div className="global-layout">
      <DrawerAppBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default GlobalLayout;
