import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

const mapping = {
  json: (data) => JSON.parse(data),
  yml: (data) => yaml.safeLoad(data),
  ini: (data) => ini.parse(data),
};

export default (configPath) => {
  const format = path.extname(configPath).slice(1);
  const data = fs.readFileSync(configPath, 'utf-8');
  return mapping[format](data);
};
