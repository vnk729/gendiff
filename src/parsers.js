import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const mapping = {
  json: (data) => JSON.parse(data),
  yml: (data) => yaml.safeLoad(data),
};

export default (configPath) => {
  const format = path.extname(configPath).slice(1);
  const data = fs.readFileSync(configPath, 'utf-8');

  return mapping[format](data);
};
