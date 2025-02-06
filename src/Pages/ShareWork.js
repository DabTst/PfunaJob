import React, { useState } from "react";

const ShareWork = () => {
  const [formData, setFormData] = useState({
    author: "",
    theme: "",
    year: "",
    subject: "",
    university: "UEM",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trabalho publicado:", formData);
    alert("Trabalho partilhado com sucesso!");
  };

  return (
    <div className="share-container">
      <h2>Partilhar Trabalho</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="author"
          placeholder="Autor(es)"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="theme"
          placeholder="Tema do Trabalho"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="year"
          placeholder="Ano de Elaboração"
          onChange={handleChange}
          minLength={2000}
          maxLength={2027}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Cadeira"
          onChange={handleChange}
          required
        />

        <select name="university" onChange={handleChange} required>
          <option value="UEM">UEM</option>
          <option value="UP">UP</option>
          <option value="ISCAM">ISCAM</option>
          <option value="ISCTEM">ISCTEM</option>
          <option value="UCM">UCM</option>
          <option value="ISUTC">ISUTC</option>
          <option value="POLITECNICA">POLITECNICA</option>
          <option value="USTM">USTM</option>
          <option value="IGECOF">IGECOF</option>
          <option value="DOM BOSCO">DOM BOSCO</option>
          <option value="UJC">UJC</option>
          <option value="Outra">Outra</option>
        </select>

        <input
          type="file"
          accept=".pdf, .doc, .docx, .ppt, .pptx"
          onChange={handleFileChange}
          required
        />

        <button type="submit">Publicar Trabalho</button>
      </form>
    </div>
  );
};

export default ShareWork;
