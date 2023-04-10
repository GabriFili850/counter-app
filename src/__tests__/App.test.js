import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders counter value", () => {
    const { getByText } = render(<App />);
    const counterElement = getByText(/0/i);
    expect(counterElement).toBeInTheDocument();
  });
});
