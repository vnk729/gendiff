import fs from 'fs';
import _ from 'lodash';

export default (pathToFile1, pathToFile2) => {
  const objFile1 = JSON.parse(fs.readFileSync(pathToFile1));
  const objFile2 = JSON.parse(fs.readFileSync(pathToFile2));
  const uniqKeys = _.uniq([...Object.keys(objFile1), ...Object.keys(objFile2)]);
  
  const result = uniqKeys.reduce((acc, key) => {
    if (_.has(objFile1, key) && _.has(objFile2, key)) {
      if (objFile1[key] === objFile2[key]) {
        return [...acc, `    ${key}: ${objFile1[key]}`];
      } else {
        return [...acc, `  + ${key}: ${objFile2[key]}`, `  - ${key}: ${objFile1[key]}`];
      }
    }

    if (!_.has(objFile1, key) && _.has(objFile2, key)) {
      return [...acc, `  + ${key}: ${objFile2[key]}`];
    }

    if (_.has(objFile1, key) && !_.has(objFile2, key)) {
      return [...acc, `  - ${key}: ${objFile1[key]}`];
    }

    return acc;
  }, []);

  return `{\n${result.join('\n')}\n}`;
};