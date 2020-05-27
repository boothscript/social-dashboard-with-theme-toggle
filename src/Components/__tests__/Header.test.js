import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Header from "../Header";
import themes from "../../Theme";

const toggleTypes = {
  LIGHT: "light",
  DARK: "dark",
};

test("displays follow stat", () => {
  const toggleState = toggleTypes.LIGHT;
  const mockFunc = jest.fn((input) => input);

  const stat = "100,101";
  render(
    <Header
      followStat={stat}
      toggleState={toggleState}
      toggleFunc={mockFunc}
      toggleTypes={toggleTypes}
    />
  );
  expect(screen.getByText(/100,101/)).toBeDefined();
});

test("displays spinner when no stat is passed", () => {
  const toggleState = toggleTypes.LIGHT;
  const mockFunc = jest.fn((input) => input);

  render(
    <Header
      toggleState={toggleState}
      toggleFunc={mockFunc}
      toggleTypes={toggleTypes}
    />
  );
  expect(screen.getByRole("alert")).toBeDefined();
});

test("label shows dark mode when in LIGHT MODE", () => {
  const toggleState = toggleTypes.LIGHT;
  const mockFunc = jest.fn((input) => input);

  render(
    <Header
      toggleState={toggleState}
      toggleFunc={mockFunc}
      toggleTypes={toggleTypes}
    />
  );
  expect(screen.getByText("Dark Mode")).toBeDefined();
});
test("label shows light mode when in DARK MODE", () => {
  const toggleState = toggleTypes.DARK;
  const mockFunc = jest.fn((input) => input);

  render(
    <Header
      toggleState={toggleState}
      toggleFunc={mockFunc}
      toggleTypes={toggleTypes}
    />
  );
  expect(screen.getByText("Light Mode")).toBeDefined();
});
test("toggle function is called when box gets checked", () => {
  const toggleState = toggleTypes.LIGHT;
  const mockFunc = jest.fn((input) => input);

  render(
    <Header
      toggleState={toggleState}
      toggleFunc={mockFunc}
      toggleTypes={toggleTypes}
    />
  );
  fireEvent.click(screen.getByRole("switch"));
  expect(mockFunc).toHaveBeenCalled();
});
