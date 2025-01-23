import React from "react";
import logo from "../../assets/soldier.png";
import "./LoginLogo.css";

const LoginLogo: React.FC = () => {
  return (
    <div className="login-logo-container">
      <img src={logo} alt="FirePower Logo" className="login-logo-image" />
    </div>
  );
};

export default LoginLogo;
