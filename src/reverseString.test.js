import reverseString from "./reverseString.js";

test("reverses string 'dog' to be 'god'", () => {
    expect(reverseString("dog")).toBe("god");
});

test("reverses string 'albuquerque' to be 'euqreuqubla'", () => {
    expect(reverseString("albuquerque")).toBe("euqreuqubla");
});