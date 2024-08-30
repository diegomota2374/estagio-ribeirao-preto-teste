import React, { useState } from "react";
import "./CalculateSoma.scss"; // Importa o arquivo SCSS específico

const CalculateSoma = () => {
  // Variáveis iniciais
  const INDICE = 12;
  let SOMA = 0;
  let K = 1;

  // Função para calcular a SOMA
  const calculateSoma = () => {
    while (K < INDICE) {
      K = K + 1;
      SOMA = SOMA + K;
    }
    return SOMA;
  };

  // Estado para armazenar o resultado
  const [resultado, setResultado] = useState(null);

  // Calcular o resultado ao renderizar
  React.useEffect(() => {
    setResultado(calculateSoma());
  }, []);

  return (
    <div className="calculate-soma-container">
      <h1 className="calculate-soma-title">Resultado do Cálculo</h1>
      <pre className="code-container">
        <code>
          {`int INDICE = 12, SOMA = 0, K = 1;
            enquanto K < ; INDICE faça {
                K = K + 1;
                SOMA = SOMA + K;
            }
            imprimir(SOMA);`}
        </code>
      </pre>
      <p className="calculate-soma-result">
        O valor da variável SOMA ao final do processamento é: {resultado}
      </p>
    </div>
  );
};

export default CalculateSoma;
