import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Auth.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recuperação de senha para:", email);
    alert(
      "Se o email estiver cadastrado, você receberá um link para redefinir a senha."
    );
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Recuperar Senha</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button">
            Enviar Link de Recuperação
          </button>
        </form>
        <div className="links">
          <p>
            Lembrou sua senha?{" "}
            <span className="link" onClick={() => navigate("/")}>
              Faça login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
