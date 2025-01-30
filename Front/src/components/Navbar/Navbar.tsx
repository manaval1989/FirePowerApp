import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo-container">
          <img src={logo} alt="FirePower Logo" className="navbar-logo" />
          <Link to="/" className="brand-name">
            FIREPOWER
          </Link>
        </div>

        <div className="navbar-links">
          <Link
            to="/login"
            className={`nav-link ${
              ["/login", "/register"].includes(location.pathname)
                ? "active"
                : ""
            }`}
          >
            ACCEDER
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
