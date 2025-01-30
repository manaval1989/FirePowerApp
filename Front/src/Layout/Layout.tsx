import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import RainEffect from "../components/RainEffect/RainEffect";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <RainEffect />
      <Navbar />
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
