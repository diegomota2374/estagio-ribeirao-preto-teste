import React, { useState } from "react";
import "./Fibonacci.scss"; // Importa o arquivo SCSS específico

const Fibonacci = () => {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const isFibonacci = (num) => {
    let a = 0;
    let b = 1;
    while (b < num) {
      let temp = a;
      a = b;
      b = temp + b;
    }
    return b === num;
  };

  const checkFibonacci = () => {
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 0) {
      setMessage("Por favor, insira um número válido.");
      return;
    }

    if (isFibonacci(num)) {
      setMessage(`${num} pertence à sequência de Fibonacci.`);
    } else {
      setMessage(`${num} não pertence à sequência de Fibonacci.`);
    }
  };

  return (
    <div className="fibonacci-container">
      <h1 className="fibonacci-title">Verificador de Sequência de Fibonacci</h1>
      <div className="fibonacci-input-group">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Digite um número"
          className="fibonacci-input"
        />
        <button onClick={checkFibonacci} className="fibonacci-button">
          Verificar
        </button>
      </div>
      <p className="fibonacci-message">{message}</p>
    </div>
  );
};

export default Fibonacci;
