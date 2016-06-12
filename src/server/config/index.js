import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const configPath = process.env.CONFIG_PATH
    || path.join(__dirname, '..', '..', '..', 'config', 'config.yml');

const server = yaml.safeLoad(fs.readFileSync(configPath, 'utf8'));
const environment = process.env.NODE_ENV || 'development';

// Set defaults for config file stuff
server.port = server.port || 5601;
server.host = server.host || '0.0.0.0';

export default {
  environment,
  port: server.port,
  host: server.host,
  backendPort: server.backendPort,
  backendHost: server.backendHost,
};
