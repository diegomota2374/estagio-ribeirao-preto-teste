import React, { useState, useEffect } from "react";
import "./SwitchLampSimulator.scss"; // Importar o arquivo SCSS

const SwitchLampSimulator = () => {
  const [switches, setSwitches] = useState([false, false, false]);
  const [lampStates, setLampStates] = useState([false, false, false]);

  const handleSwitch = (switchIndex) => {
    const newSwitches = [...switches];
    newSwitches[switchIndex] = !newSwitches[switchIndex];
    setSwitches(newSwitches);
  };

  useEffect(() => {
    const simulateLamps = () => {
      const newLampStates = [false, false, false];
      if (switches[0]) {
        newLampStates[0] = true; // Lâmpada 1 acesa
      }
      if (switches[1]) {
        newLampStates[1] = true; // Lâmpada 2 acesa
      }
      if (switches[2]) {
        newLampStates[2] = true; // Lâmpada 3 acesa
      }
      setLampStates(newLampStates);
    };

    simulateLamps();
  }, [switches]);

  return (
    <div className="switch-lamp-simulator">
      <h1>Interruptores e Lâmpadas</h1>
      <div className="button-container">
        <button data-number="1" onClick={() => handleSwitch(0)}>
          <span>Interruptor 1</span>
        </button>
        <button data-number="2" onClick={() => handleSwitch(1)}>
          <span>Interruptor 2</span>
        </button>
        <button data-number="3" onClick={() => handleSwitch(2)}>
          <span>Interruptor 3</span>
        </button>
      </div>
      <div>
        <h2>Lâmpadas:</h2>
        <p>Lâmpada 1: {lampStates[0] ? "Acesa" : "Apagada"}</p>
        <p>Lâmpada 2: {lampStates[1] ? "Acesa" : "Apagada"}</p>
        <p>Lâmpada 3: {lampStates[2] ? "Acesa" : "Apagada"}</p>
      </div>
      <div className="summary">
        Resumo da Estratégia Primeira Ida: Ligue o Interruptor 1 e deixe-o por 5
        minutos. Desligue o Interruptor 1 e ligue o Interruptor 2. Vá até as
        lâmpadas. Segunda Ida: Identifique a lâmpada acesa (Interruptor 2).
        Identifique a lâmpada apagada e quente (Interruptor 1). Identifique a
        lâmpada apagada e fria (Interruptor 3).
      </div>
    </div>
  );
};

export default SwitchLampSimulator;
