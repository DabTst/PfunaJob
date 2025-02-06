import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShareWork from "./ShareWork";
import SearchWork from "./SearchWork";
import "../CSS/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("share");

  const handleLogout = () => {
    // Lógica futura para deslogar
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>PhunaJob</h2>
        <button onClick={() => setActiveTab("share")}>
          📤 Partilhar Trabalho
        </button>
        <button onClick={() => setActiveTab("search")}>
          🔍 Consultar Trabalhos
        </button>
        <button className="logout-btn" onClick={handleLogout}>
          🚪 Sair
        </button>
      </div>

      <div className="content">
        {activeTab === "share" ? <ShareWork /> : <SearchWork />}
      </div>
    </div>
  );
};

export default Dashboard;
