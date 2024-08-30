import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Para as asserções de DOM
import SwitchLampSimulator from "./SwitchLampSimulator";

describe("SwitchLampSimulator Component", () => {
  test("deve exibir o estado correto das lâmpadas após a interação com os interruptores", () => {
    render(<SwitchLampSimulator />);

    // Obtém os botões e os textos das lâmpadas
    const button1 = screen.getByRole("button", { name: /Interruptor 1/i });
    const button2 = screen.getByRole("button", { name: /Interruptor 2/i });
    const button3 = screen.getByRole("button", { name: /Interruptor 3/i });

    const lamp1Text = screen.getByText(/Lâmpada 1:/i);
    const lamp2Text = screen.getByText(/Lâmpada 2:/i);
    const lamp3Text = screen.getByText(/Lâmpada 3:/i);

    // Inicialmente, todas as lâmpadas devem estar apagadas
    expect(lamp1Text).toHaveTextContent("Lâmpada 1: Apagada");
    expect(lamp2Text).toHaveTextContent("Lâmpada 2: Apagada");
    expect(lamp3Text).toHaveTextContent("Lâmpada 3: Apagada");

    // Liga o Interruptor 1
    fireEvent.click(button1);
    expect(lamp1Text).toHaveTextContent("Lâmpada 1: Acesa");
    expect(lamp2Text).toHaveTextContent("Lâmpada 2: Apagada");
    expect(lamp3Text).toHaveTextContent("Lâmpada 3: Apagada");

    // Desliga o Interruptor 1 e liga o Interruptor 2
    fireEvent.click(button1);
    fireEvent.click(button2);
    expect(lamp1Text).toHaveTextContent("Lâmpada 1: Apagada");
    expect(lamp2Text).toHaveTextContent("Lâmpada 2: Acesa");
    expect(lamp3Text).toHaveTextContent("Lâmpada 3: Apagada");

    // Liga o Interruptor 3
    fireEvent.click(button3);
    expect(lamp1Text).toHaveTextContent("Lâmpada 1: Apagada");
    expect(lamp2Text).toHaveTextContent("Lâmpada 2: Acesa");
    expect(lamp3Text).toHaveTextContent("Lâmpada 3: Acesa");
  });
});
