import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default (configPath) => {
  const extension = path.extname(configPath);
  const data = fs.readFileSync(configPath, 'utf-8');

  if (extension === '.json') {
    return JSON.parse(data);
  }
  if (extension === '.yml') {
    return yaml.safeLoad(data);
  }
};
