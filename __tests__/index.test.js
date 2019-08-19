import fs from 'fs';
import genDiff from '../src';

const formats = [['json'], ['yml'], ['ini']];

test.each(formats)(
  '%p',
  (extension) => {
    const before = `${__dirname}/__fixtures__/before.${extension}`;
    const after = `${__dirname}/__fixtures__/after.${extension}`;
    const expected = fs.readFileSync(`${__dirname}/__fixtures__/expected.txt`, 'utf-8');
    expect(genDiff(before, after)).toBe(expected);
  },
);
