import React from "react"; // Import React
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import jest-dom for extended matchers
import App from "../App"; // Adjust the path if necessary

describe("App Component", () => {
  test("should render the home page correctly with a welcome message", () => {
    render(<App />);
    const welcomeMessage = screen.getByText(/Welcome to the React App/i);
    expect(welcomeMessage).toBeInTheDocument(); // This should work now
  });

  test("should render navigation links for all pages", () => {
    render(<App />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(6); // Adjust the number if necessary
  });
});
