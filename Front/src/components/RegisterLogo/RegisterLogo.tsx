import React from "react";
import logo from "../../assets/EnlistSam.png";
import "./RegisterLogo.css";

const RegisterLogo: React.FC = () => {
  return (
    <div className="register-logo-container">
      <img
        src={logo}
        alt="FirePower Register Logo"
        className="register-logo-image"
      />
    </div>
  );
};

export default RegisterLogo;
