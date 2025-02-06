import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Auth.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Cadastro realizado:", formData);
    // Aqui futuramente será feita a confirmação de e-mail e redirecionamento
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label>Nome</label>
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              name="password"
              placeholder="Crie uma senha"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Confirme sua senha</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirme a senha"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
        <div className="links">
          <p>
            Já tem uma conta?{" "}
            <span className="link" onClick={() => navigate("/")}>
              Faça login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
