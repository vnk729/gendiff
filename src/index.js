import fs from 'fs';
import _ from 'lodash';
import parse from './parsers';

export default (pathToFile1, pathToFile2) => {
  const file1 = parse(pathToFile1);
  const file2 = parse(pathToFile2);

  const allKeys = [...Object.keys(file1), ...Object.keys(file2)];
  const uniqKeys = allKeys.reduce((acc, key) => (acc.includes(key) ? acc : [...acc, key]), []);

  const result = uniqKeys.reduce((acc, key) => {
    if (file1[key] === file2[key]) {
      return [...acc, `\n    ${key}: ${file2[key]}`];
    }
    if (_.has(file1, key) && !_.has(file2, key)) {
      return [...acc, `\n  - ${key}: ${file1[key]}`];
    }
    if (!_.has(file1, key) && _.has(file2, key)) {
      return [...acc, `\n  + ${key}: ${file2[key]}`];
    }
    return [...acc, `\n  + ${key}: ${file2[key]}`, `\n  - ${key}: ${file1[key]}`];
  }, []);

  return `{${result}\n}`;
};
