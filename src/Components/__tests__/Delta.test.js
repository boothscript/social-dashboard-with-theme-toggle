import React from "react";
import { render, screen } from "@testing-library/react";
import Delta from "../Delta";
import { ThemeProvider } from "styled-components";

import themes from "../../Theme";

// tests light themes

test("Number is displayed in red when negative (light theme)", () => {
  const number = -50;
  render(
    <ThemeProvider theme={themes.light}>
      <Delta suffix="%" delta={number} />
    </ThemeProvider>
  );

  expect(screen.getByText("50 %")).toHaveStyle(`color: ${themes.light.red}`);
});

test("Red arrow svg is displayed when negative (light theme)", () => {
  const number = -50;
  render(
    <ThemeProvider theme={themes.light}>
      <Delta suffix="%" delta={number} />
    </ThemeProvider>
  );

  expect(screen.getByAltText("Delta indication arrow").src).toMatch(/red/);
});

test("Number is displayed in green when positive (light theme)", () => {
  const number = 50;
  render(
    <ThemeProvider theme={themes.light}>
      <Delta suffix="%" delta={number} />
    </ThemeProvider>
  );

  expect(screen.getByText("50 %")).toHaveStyle(`color: ${themes.light.green}`);
});

test("Green arrow svg is displayed when positive (light theme)", () => {
  const number = 50;
  render(
    <ThemeProvider theme={themes.light}>
      <Delta suffix="%" delta={number} />
    </ThemeProvider>
  );

  expect(screen.getByAltText("Delta indication arrow").src).toMatch(/green/);
});

// tests dark themes

test("Number is displayed in red when negative (darke theme)", () => {
  const number = -50;
  render(
    <ThemeProvider theme={themes.dark}>
      <Delta suffix="%" delta={number} />
    </ThemeProvider>
  );

  expect(screen.getByText("50 %")).toHaveStyle(`color: ${themes.dark.red}`);
});

test("Red arrow svg is displayed when negative (darke theme)", () => {
  const number = -50;
  render(
    <ThemeProvider theme={themes.dark}>
      <Delta suffix="%" delta={number} />
    </ThemeProvider>
  );

  expect(screen.getByAltText("Delta indication arrow").src).toMatch(/red/);
});

test("Number is displayed in green when positive (darke theme)", () => {
  const number = 50;
  render(
    <ThemeProvider theme={themes.dark}>
      <Delta suffix="%" delta={number} />
    </ThemeProvider>
  );

  expect(screen.getByText("50 %")).toHaveStyle(`color: ${themes.dark.green}`);
});

test("Green arrow svg is displayed when positive (darke theme)", () => {
  const number = 50;
  render(
    <ThemeProvider theme={themes.dark}>
      <Delta suffix="%" delta={number} />
    </ThemeProvider>
  );

  expect(screen.getByAltText("Delta indication arrow").src).toMatch(/green/);
});
