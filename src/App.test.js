import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { followTotal, heroStats, stats } from "./Data/data";

const mockSuccessResponse = { followTotal, heroStats, stats };
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

test("light theme is loaded by default", () => {
  render(<App />);
  expect(screen.getByText(/Dark Mode/)).toBeDefined;
});
test("dark mode is activated in toggle click", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("switch"));
  expect(screen.getByText(/Light Mode/)).toBeDefined;
});
test("Light mode is activated in toggle click when in dark mode", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("switch"));
  expect(screen.getByText(/Light Mode/)).toBeDefined;
  fireEvent.click(screen.getByRole("switch"));
  expect(screen.getByText(/Dark Mode/)).toBeDefined;
});
