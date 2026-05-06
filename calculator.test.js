import { add, subtract, multiply, divide } from "./calculator.js";

describe('calculator', () => {
  test('add two positive numbers', () => {
    expect(add(2, 3)).toEqual(5);
  });
  test('add two negative', () => {
    expect(add(-2, -10)).toEqual(-12);
  });
  test('add a positive and a negative number', () => {
    expect(add(-5, 5)).toEqual(0);
  });
  test('add two zeros', () => {
    expect(add(0, 0)).toEqual(0);
  });
  test('subtract with one missing number', () => {
    expect(subtract(1, 4)).toEqual(-3);
  });
  test('multiply with zero', () => {
    expect(multiply(0, 14)).toEqual(0);
  });
  test('multiply two large numbers', () => {
    expect(multiply(500, 100)).toEqual(50000);
  });
  test('divide two numbers', () => {
    expect(divide(24, 4)).toEqual(6);
  });
  test('divide number by itself', () => {
    expect(divide(44, 44)).toEqual(1);
  });
});