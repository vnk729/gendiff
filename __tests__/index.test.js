import fs from 'fs';
import genDiff from '../src';

test('gendiff', () => {
  const before = `${__dirname}/__fixtures__/before.json`;
  const after = `${__dirname}/__fixtures__/after.json`;
  const expected = fs.readFileSync(`${__dirname}/__fixtures__/expected.txt`, 'utf-8');

  expect(genDiff(before, after)).toBe(expected);
});
