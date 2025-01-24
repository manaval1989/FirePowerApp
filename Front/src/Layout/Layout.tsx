import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
