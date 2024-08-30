import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Para as asserções de DOM
import StringAnalyzer from "./StringAnalyzer";

describe("StringAnalyzer Component", () => {
  test('deve exibir a contagem correta de letras "a"', () => {
    render(<StringAnalyzer />);

    // Encontra o input e o botão
    const input = screen.getByPlaceholderText(/Digite uma string/i);
    const button = screen.getByText(/Analisar/i);

    // Simula a entrada do usuário
    fireEvent.change(input, { target: { value: "A casa está abandonada" } });
    fireEvent.click(button);

    // Verifica se a mensagem correta é exibida
    expect(
      screen.getByText(
        /A letra 'a' \(maiúscula ou minúscula\) ocorre 7 vezes\./i
      )
    ).toBeInTheDocument();
  });

  test('deve exibir mensagem quando a letra "a" não ocorre', () => {
    render(<StringAnalyzer />);

    // Encontra o input e o botão
    const input = screen.getByPlaceholderText(/Digite uma string/i);
    const button = screen.getByText(/Analisar/i);

    // Simula a entrada do usuário
    fireEvent.change(input, { target: { value: "Hello World!" } });
    fireEvent.click(button);

    // Verifica se a mensagem correta é exibida
    expect(
      screen.getByText(/A letra 'a' não ocorre na string\./i)
    ).toBeInTheDocument();
  });
});
