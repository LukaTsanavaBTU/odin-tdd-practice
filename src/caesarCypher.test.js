import caesarCypher from "./caesarCypher.js";

test("encodes regular text", () => {
    expect(caesarCypher("abc", 7)).toBe("hij");
});

test("encodes regular text 2", () => {
    expect(caesarCypher("efg", 5)).toBe("jkl");
});

test("wrapping from z to a works when shifting", () => {
    expect(caesarCypher("xyz", 3)).toBe("abc");
});

test("preserves case", () => {
    expect(caesarCypher("aBc", 18)).toBe("sTu");
});

test("non-letter characters stay unchanged", () => {
    expect(caesarCypher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});




