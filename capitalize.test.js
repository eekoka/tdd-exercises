import { capitalize } from "./capitalize.js";

describe('capitalize', () => {
  test('capitalize from all caps', () => {
    expect(capitalize('THE QUICK BROWN FOX')).toEqual('The quick brown fox');
  });
  test('capitalize from all lowercase', () => {
    expect(capitalize('the lazy dog')).toEqual('The lazy dog');
  });
  test('capitalize mixing in numbers', () => {
    expect(capitalize('925 is greater than 5')).toEqual('925 is greater than 5');
  });
  test('capitalize single character', () => {
    expect(capitalize('z')).toEqual('Z');
  });
  test('capitalize two characters', () => {
    expect(capitalize('xY')).toEqual('Xy');
  });
  test('capitalize works with blank strings', () => {
    expect(capitalize('')).toEqual('');
  });
  test('capitalize works with empty spaces', () => {
    expect(capitalize('  ')).toEqual('  ');
  });
});