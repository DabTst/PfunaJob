import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Loginn.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Entre na sua conta</h2>
        <form onSubmit={handleLogin} className="form">
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Senha:</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button">
            Entrar
          </button>
        </form>
        <div className="links">
          <p>
            Não tem uma conta?{" "}
            <span className="link" onClick={() => navigate("/signup")}>
              Cadastre-se
            </span>
          </p>
          <p>
            Esqueceu sua senha?{" "}
            <span className="link" onClick={() => navigate("/ForgotPassword")}>
              Recuperar senha
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
