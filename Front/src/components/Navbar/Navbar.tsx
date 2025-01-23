import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">
          FIREPOWER
        </Link>
      </div>

      <div className="navbar-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          INICIO
        </Link>
        <Link
          to="/register"
          className={`nav-link ${
            location.pathname === "/register" ? "active" : ""
          }`}
        >
          REGISTRO
        </Link>
        <Link
          to="/login"
          className={`nav-link ${
            location.pathname === "/login" ? "active" : ""
          }`}
        >
          LOGIN
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
