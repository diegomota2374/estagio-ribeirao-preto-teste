import React from "react";
import "./SequenceCalculator.scss"; // Importa o arquivo SCSS específico

const SequenceCalculator = () => {
  // Função para calcular o próximo elemento de cada sequência
  const calculateSequences = () => {
    // a) Sequência: 1, 3, 5, 7, ___
    const sequenceA = [1, 3, 5, 7];
    const nextElementA = sequenceA[sequenceA.length - 1] + 2;

    // b) Sequência: 2, 4, 8, 16, 32, 64, ____
    const sequenceB = [2, 4, 8, 16, 32, 64];
    const nextElementB = sequenceB[sequenceB.length - 1] * 2;

    // c) Sequência: 0, 1, 4, 9, 16, 25, 36, ____
    const sequenceC = [0, 1, 4, 9, 16, 25, 36];
    const nextElementC = Math.pow(
      Math.sqrt(sequenceC[sequenceC.length - 1]) + 1,
      2
    );

    // d) Sequência: 4, 16, 36, 64, ____
    const sequenceD = [4, 16, 36, 64];
    const nextElementD = Math.pow(
      Math.sqrt(sequenceD[sequenceD.length - 1]) + 2,
      2
    );

    // e) Sequência: 1, 1, 2, 3, 5, 8, ____
    const sequenceE = [1, 1, 2, 3, 5, 8];
    const nextElementE =
      sequenceE[sequenceE.length - 1] + sequenceE[sequenceE.length - 2];

    // f) Sequência: 2, 10, 12, 16, 17, 18, 19, ____
    const sequenceF = [2, 10, 12, 16, 17, 18, 19];
    const nextElementF = sequenceF[sequenceF.length - 1] + 1;

    return {
      nextElementA,
      nextElementB,
      nextElementC,
      nextElementD,
      nextElementE,
      nextElementF,
    };
  };

  // Calcula os próximos elementos
  const {
    nextElementA,
    nextElementB,
    nextElementC,
    nextElementD,
    nextElementE,
    nextElementF,
  } = calculateSequences();

  return (
    <div className="sequence-calculator-container">
      <h1 className="sequence-calculator-title">
        Próximos elementos em sequências
      </h1>
      <div className="sequence-calculator-card">
        <div className="elements-container">
          a) 1, 3, 5, 7, ___ <br />
          b) 2, 4, 8, 16, 32, 64,____
          <br />
          c) 0, 1, 4, 9, 16, 25,36, ____ <br />
          d) 4, 16, 36, 64, ____
          <br />
          e) 1, 1, 2, 3, 5, 8, ____
          <br />
          f) 2,10, 12, 16, 17, 18, 19, ____
        </div>
        <p>Próximo elemento na sequência a: {nextElementA}</p>
        <p>Próximo elemento na sequência b: {nextElementB}</p>
        <p>Próximo elemento na sequência c: {nextElementC}</p>
        <p>Próximo elemento na sequência d: {nextElementD}</p>
        <p>Próximo elemento na sequência e: {nextElementE}</p>
        <p>Próximo elemento na sequência f: {nextElementF}</p>
      </div>
    </div>
  );
};

export default SequenceCalculator;
