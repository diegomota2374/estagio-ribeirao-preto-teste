import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CalculateSoma from "./CalculateSoma";

describe("CalculateSoma Component", () => {
  test("deve calcular e exibir o valor correto da variável SOMA", () => {
    // Renderiza o componente
    render(<CalculateSoma />);

    // Obtém o texto que contém o valor da SOMA
    const resultText = screen.getByText(
      /O valor da variável SOMA ao final do processamento é:/i
    );

    // Verifica se o texto contém o valor esperado
    expect(resultText).toBeInTheDocument();

    // Verifica o valor específico da SOMA
    // A SOMA para o INDICE de 12 deve ser (1 + 2 + ... + 11) = 77
    expect(resultText).toHaveTextContent("77");
  });
});
