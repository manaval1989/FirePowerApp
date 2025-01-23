import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

interface ForgotPasswordData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [formData, setFormData] = useState<ForgotPasswordData>({
    email: "",
  });
  const [errors, setErrors] = useState<Partial<ForgotPasswordData>>({});
  const [successMessage, setSuccessMessage] = useState<string>("");

  const validateForm = () => {
    const newErrors: Partial<ForgotPasswordData> = {};

    if (!formData.email) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Aquí irá la lógica para enviar el email de recuperación
      console.log("Recovery email sent to:", formData.email);
      setSuccessMessage("Se ha enviado un enlace de recuperación a tu email");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSuccessMessage(""); // Limpiar mensaje de éxito cuando el usuario empiece a escribir
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2>RECUPERAR CONTRASEÑA</h2>
        <p className="instructions">
          Ingresa tu email y te enviaremos instrucciones para recuperar tu
          contraseña
        </p>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          {successMessage && <span className="success">{successMessage}</span>}
        </div>

        <button type="submit" className="submit-btn">
          ENVIAR INSTRUCCIONES
        </button>

        <div className="links-container">
          <Link to="/login" className="back-to-login">
            Volver al inicio de sesión
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
