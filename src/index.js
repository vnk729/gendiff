import fs from 'fs';
import _ from 'lodash';

export default (pathToFile1, pathToFile2) => {
  const file1 = JSON.parse(fs.readFileSync(pathToFile1, 'utf-8'));
  const file2 = JSON.parse(fs.readFileSync(pathToFile2, 'utf-8'));

  const allKeys = [...Object.keys(file1), ...Object.keys(file2)];
  const uniqKeys = allKeys.reduce((acc, key) => (acc.includes(key) ? acc : [...acc, key]), []);

  return uniqKeys.reduce((acc, key) => {
    if (file1[key] === file2[key]) {
      return { ...acc, [`  ${key}`]: file2[key] };
    }
    if (_.has(file1, key) && !_.has(file2, key)) {
      return { ...acc, [`- ${key}`]: file1[key] };
    }
    if (!_.has(file1, key) && _.has(file2, key)) {
      return { ...acc, [`+ ${key}`]: file2[key] };
    }
    return { ...acc, [`+ ${key}`]: file2[key], [`- ${key}`]: file1[key] };
  }, {});
};
