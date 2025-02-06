import React, { useState } from "react";
import "../CSS/Auth.css";

const SearchWork = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results /*setResults*/] = useState([
    {
      id: 1,
      title: "Impacto da Tecnologia na Educação",
      file: "trabalho1.pdf",
    },
    {
      id: 2,
      title: "Energias Renováveis e Sustentabilidade",
      file: "trabalho2.pdf",
    },
  ]);

  const handleSearch = () => {
    console.log("Pesquisa por:", searchTerm);
  };

  return (
    <div className="search-container">
      <h2>Consultar Trabalhos</h2>
      <input
        type="text"
        placeholder="Pesquisar por palavras-chave..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>🔍 Pesquisar</button>

      <div className="results">
        {results.map((work) => (
          <div key={work.id} className="work-card">
            <p>{work.title}</p>
            <a href={`/${work.file}`} download>
              📥 Baixar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchWork;
