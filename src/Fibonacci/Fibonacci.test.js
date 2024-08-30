import React from "react"; // Importa o React para que o JSX funcione
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Para as asserções de DOM
import Fibonacci from "./Fibonacci";

describe("Fibonacci Component", () => {
  test("deve exibir mensagem de erro para entrada inválida", () => {
    render(<Fibonacci />);

    const input = screen.getByPlaceholderText("Digite um número");
    const button = screen.getByText("Verificar");

    // Insere valor inválido
    fireEvent.change(input, { target: { value: "abc" } });
    fireEvent.click(button);

    // Verifica se a mensagem de erro está visível
    expect(
      screen.getByText("Por favor, insira um número válido.")
    ).toBeInTheDocument();
  });

  test("deve identificar corretamente um número que pertence à sequência de Fibonacci", () => {
    render(<Fibonacci />);

    const input = screen.getByPlaceholderText("Digite um número");
    const button = screen.getByText("Verificar");

    // Insere um número que pertence à sequência de Fibonacci
    fireEvent.change(input, { target: { value: "8" } });
    fireEvent.click(button);

    // Verifica se a mensagem correta está visível
    expect(
      screen.getByText("8 pertence à sequência de Fibonacci.")
    ).toBeInTheDocument();
  });

  test("deve identificar corretamente um número que não pertence à sequência de Fibonacci", () => {
    render(<Fibonacci />);

    const input = screen.getByPlaceholderText("Digite um número");
    const button = screen.getByText("Verificar");

    // Insere um número que não pertence à sequência de Fibonacci
    fireEvent.change(input, { target: { value: "10" } });
    fireEvent.click(button);

    // Verifica se a mensagem correta está visível
    expect(
      screen.getByText("10 não pertence à sequência de Fibonacci.")
    ).toBeInTheDocument();
  });
});
