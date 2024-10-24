import capitalize from "./capitalize.js";

test("capitalizes 'apple' to be 'Apple'", () => {
    expect(capitalize("apple")).toBe("Apple");
});

test("capitalizes 'hamburger' to be 'Hamburger'", () => {
    expect(capitalize("hamburger")).toBe("Hamburger");
});