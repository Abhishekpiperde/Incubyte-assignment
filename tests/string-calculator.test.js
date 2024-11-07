const StringCalculator = require('../src/string-calculator');

test('returns 0 for an empty string', () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});

test('returns 1 for input "1"', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1")).toBe(1);
  });