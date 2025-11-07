import sum from "../sum.js";

// test(str,callback)
test("Sum function should calculate sum of two numbers", () => {
  const result = sum(2, 3);
  expect(result).toBe(5); // Assertion - new method
});
