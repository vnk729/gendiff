import fs from 'fs';
import genDiff from '../src';

test('gendiff', () => {
  const pathToFile1 = `${__dirname}/../__fixtures__/before.json`;
  const pathToFile2 = `${__dirname}/../__fixtures__/after.json`;
  const expected = fs.readFileSync(`${__dirname}/../__fixtures__/expected.txt`, 'utf-8');

  expect(genDiff(pathToFile1, pathToFile2)).toEqual(expected);
});
