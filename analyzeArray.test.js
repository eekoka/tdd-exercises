import { analyzeArray } from "./analyzeArray.js";

describe('analyzeArray', () => {
    test('analyzeArray with all positive numbers', () => {
        expect(analyzeArray([1,2,3])).toEqual({"average": 2, "min": 1, "max": 3, "length": 3});
    });
    test('analyzeArray with a negative number', () => {
        expect(analyzeArray([-51,8,23,1])).toEqual({"average": -4.75, "min": -51, "max": 23, "length": 4});
    });
});