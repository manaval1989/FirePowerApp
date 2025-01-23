import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginLogo from "../LoginLogo/LoginLogo";
import "./LoginForm.css";

interface LoginData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<LoginData>>({});

  const validateForm = () => {
    const newErrors: Partial<LoginData> = {};

    if (!loginData.email) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!loginData.password) {
      newErrors.password = "La contraseña es requerida";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Aquí irá la lógica de login
      console.log("Login data:", loginData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <LoginLogo />
      <h2>INICIAR SESIÓN</h2>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={loginData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      <button type="submit" className="submit-btn">
        INGRESAR
      </button>

      <div className="links-container">
        <Link to="/forgot-password" className="forgot-password">
          ¿Olvidaste tu contraseña?
        </Link>
        <Link to="/register" className="register-link">
          ¿No tienes cuenta? Regístrate
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
