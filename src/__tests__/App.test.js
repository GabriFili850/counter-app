import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders counter value", () => {
    const { getByText } = render(<App />);
    const counterElement = getByText(/0/i);
    expect(counterElement).toBeInTheDocument();
  });

  test("increments counter on IncreaseButton click", () => {
    const { getByText } = render(<App />);
    const increaseButton = getByText(/Increase/i);
    const counterElement = getByText(/0/i);
    fireEvent.click(increaseButton);
    expect(counterElement).toHaveTextContent("1");
  });

  test("decrements counter on DecreaseButton click", () => {
    const { getByText } = render(<App />);
    const decreaseButton = getByText(/Decrease/i);
    const counterElement = getByText(/0/i);
    fireEvent.click(decreaseButton);
    expect(counterElement).toHaveTextContent("0");
  });

  test("does not allow counter to go negative", () => {
    const { getByText } = render(<App />);
    const decreaseButton = getByText(/Decrease/i);
    const counterElement = getByText(/0/i);
    fireEvent.click(decreaseButton);
    expect(counterElement).toHaveTextContent("0");
  });
});
