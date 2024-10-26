import analyzeArray from "./analyzeArray.js";

test("analyze basic array", () => {
    const testArr = [1, 8, 3, 4, 2, 6];
    expect(analyzeArray(testArr)).toEqual(
        {average: 4,
        min: 1,
        max: 8,
        length: 6
    }
);
});

test("analyze basic array 2", () => {
    const testArr = [1, 8, 3, -4, 2, 6, -12, 20];
    expect(analyzeArray(testArr)).toEqual(
        {average: 3,
        min: -12,
        max: 20,
        length: 8
    }
);
});