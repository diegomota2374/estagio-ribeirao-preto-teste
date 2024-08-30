import React, { useState } from "react";
import "./StringAnalyzer.scss"; // Importa o arquivo SCSS específico

const StringAnalyzer = () => {
  const [inputString, setInputString] = useState("");
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const analyzeString = () => {
    // Contar ocorrências de 'a' e 'A'
    const lowerCaseCount = (inputString.match(/a/g) || []).length;
    const upperCaseCount = (inputString.match(/A/g) || []).length;
    const totalCount = lowerCaseCount + upperCaseCount;

    // Exibir mensagem com o resultado
    if (totalCount > 0) {
      setMessage(
        `A letra 'a' (maiúscula ou minúscula) ocorre ${totalCount} vezes.`
      );
    } else {
      setMessage("A letra 'a' não ocorre na string.");
    }
  };

  return (
    <div className="string-analyzer-container">
      <div className="string-analyzer-card">
        <h1 className="string-analyzer-title">Analisador de String</h1>
        <input
          type="text"
          className="string-analyzer-input"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          placeholder="Digite uma string"
        />
        <button className="string-analyzer-button" onClick={analyzeString}>
          Analisar
        </button>
        <p className="string-analyzer-message">{message}</p>
      </div>
    </div>
  );
};

export default StringAnalyzer;
