const { isEven } = require("../dist/learning-lerna-sc-is-even.js");
test("isEven", () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(1)).toBe(false);
});
