import calculator from "./calculator.js";

test("adds 2 + 3 to be equal to 5", () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test("adds 67 + (-5) to be equal to 62", () => {
    expect(calculator.add(67, -5)).toBe(62);
});

test("subtracts 6 - 4 to be equal to 2", () => {
    expect(calculator.subtract(6, 4)).toBe(2);
});

test("subtracts 8 - (-10) to be equal to 18", () => {
    expect(calculator.subtract(8, -10)).toBe(18);
});

test("divides 8 / 4 to be equal to 2", () => {
    expect(calculator.divide(8, 4)).toBe(2);
});

test("divides 100 / (-2) to be equal to -50", () => {
    expect(calculator.divide(100, -2)).toBe(-50);
});

test("multiplies 5 * 2 to be equal to 10", () => {
    expect(calculator.multiply(5, 2)).toBe(10);
});

test("multiplies (-25) * 4 to be equal to -100", () => {
    expect(calculator.multiply(-25, 4)).toBe(-100);
});