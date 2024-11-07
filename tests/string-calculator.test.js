const StringCalculator = require('../src/string-calculator');

test('returns 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("")).toBe(0);
});

test('returns 1 for input "1"', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1")).toBe(1);
});

test('returns 4 for input "1,3"', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1,3")).toBe(4);
});

test('returns 3 for input "1\n2"', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1\n2")).toBe(3);
  });