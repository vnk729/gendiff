import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

export default (configPath) => {
  const extension = path.extname(configPath);
  const data = fs.readFileSync(configPath, 'utf-8');

  let parse;
  if (extension === '.json') {
    parse = JSON.parse;
  }
  if (extension === '.yml') {
    parse = yaml.safeLoad;
  }
  if (extension === '.ini') {
    parse = ini.parse;
  }

  return parse(data);
};
