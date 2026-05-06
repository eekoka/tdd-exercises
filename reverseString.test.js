import { reverseString } from "./reverseString.js";

describe('reverseString', () => {
  test('reverseString from one word', () => {
    expect(reverseString('FOX')).toEqual('XOF');
  });
  test('reverseString few words', () => {
    expect(reverseString('The lazy dog')).toEqual('god yzal ehT');
  });
  test('reverseString mixing in numbers', () => {
    expect(reverseString('925 is not 5!')).toEqual('!5 ton si 529');
  });
  test('reverseString single character', () => {
    expect(reverseString('Z')).toEqual('Z');
  });
  test('reverseString two characters', () => {
    expect(reverseString('xY')).toEqual('Yx');
  });
  test('reverseString works with blank strings', () => {
    expect(reverseString('')).toEqual('');
  });
  test('reverseString works with empty spaces', () => {
    expect(reverseString('  ')).toEqual('  ');
  });
});