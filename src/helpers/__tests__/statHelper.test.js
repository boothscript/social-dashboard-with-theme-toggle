import statHelper from "../statHelper";

test("converts number above 9,999", () => {
  const result = statHelper(25345);
  expect(result).toBe("25k");
});

test("Does not convert number below 9,999", () => {
  const result = statHelper(5698);
  expect(result).toBe(5698);
});

test("Handles null as input", () => {
  const result = statHelper(null);
  expect(result).toBe(null);
});

test("Random Generated Tests", () => {
  for (let i = 1; i < 50; i++) {
    const number = Math.floor(Math.random() * 100000);
    const result = statHelper(number);
    if (number < 10000) {
      expect(result).toBe(number);
    } else {
      expect(result).toMatch(/d*k/);
    }
  }
});
