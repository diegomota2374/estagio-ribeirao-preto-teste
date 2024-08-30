import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Para as asserções de DOM
import SequenceCalculator from "./SequenceCalculator";

describe("SequenceCalculator Component", () => {
  test("deve calcular e exibir os próximos elementos das sequências corretamente", () => {
    render(<SequenceCalculator />);

    // Verifica se os próximos elementos das sequências estão corretos
    expect(
      screen.getByText(/Próximo elemento na sequência a:/)
    ).toHaveTextContent("Próximo elemento na sequência a: 9");
    expect(
      screen.getByText(/Próximo elemento na sequência b:/)
    ).toHaveTextContent("Próximo elemento na sequência b: 128");
    expect(
      screen.getByText(/Próximo elemento na sequência c:/)
    ).toHaveTextContent("Próximo elemento na sequência c: 49");
    expect(
      screen.getByText(/Próximo elemento na sequência d:/)
    ).toHaveTextContent("Próximo elemento na sequência d: 100");
    expect(
      screen.getByText(/Próximo elemento na sequência e:/)
    ).toHaveTextContent("Próximo elemento na sequência e: 13");
    expect(
      screen.getByText(/Próximo elemento na sequência f:/)
    ).toHaveTextContent("Próximo elemento na sequência f: 20");
  });
});
