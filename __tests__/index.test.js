import fs from 'fs';
import path from 'path';
import genDiff from '../src';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const formats = ['json', 'yml', 'ini'];

test.each(formats)('diff %s files', (format) => {
  const pathToFile1 = getFixturePath(`before.${format}`);
  const pathToFile2 = getFixturePath(`after.${format}`);
  const expected = readFile('expected.txt');
  expect(genDiff(pathToFile1, pathToFile2)).toEqual(expected);
});
