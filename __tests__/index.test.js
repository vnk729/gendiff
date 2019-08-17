import fs from 'fs';
import genDiff from '../src';

describe('gendiff', () => {
  const expected = fs.readFileSync(`${__dirname}/__fixtures__/expected.txt`, 'utf-8');

  test('json', () => {
    const before = `${__dirname}/__fixtures__/before.json`;
    const after = `${__dirname}/__fixtures__/after.json`;
    expect(genDiff(before, after)).toBe(expected);
  });

  test('yml', () => {
    const before = `${__dirname}/__fixtures__/before.yml`;
    const after = `${__dirname}/__fixtures__/after.yml`;
    expect(genDiff(before, after)).toBe(expected);
  });
});
