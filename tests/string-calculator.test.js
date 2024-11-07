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

test('returns 13 for custom delimiter "//;\n1;4;8"', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("//;\n1;4;8")).toBe(13);
});

test('throws error for negative numbers', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add("1,-4,5,-7")).toThrow("Negative numbers not allowed: -4, -7");
});

test('ignores numbers greater than 1000', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("2,1001,3")).toBe(5);
});