import sum from "./sum.js";

describe("test for sum function", () => {
  test("add 2 + 2 equals 4", () => {
    expect(sum(2, 2)).toBe(4);
  });
  test("add -5 + -5 equals -10", () => {
    expect(sum(-5, -5)).toBe(-10);
  });
});

// to run test write =>  npm test