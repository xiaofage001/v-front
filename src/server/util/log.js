'use strict';

import winston from 'winston';

let console_log = new winston.transports.Console({
  colorize: true,
  level: 'debug',
});

let file_log = new winston.transports.File({
  filename: 'soc_frontend.log',
  level: 'debug',
  json: false,
  maxsize: 2048000,
  maxFiles: 1,
});

class Logger extends winston.Logger {
  constructor(options) {
    super(options);
    this.tag = options.tag;
  }
  log() {
    let rawMsg = arguments[1];
    arguments[1] = `[${this.tag}] ${rawMsg}`;
    super.log.apply(this, arguments);
  }
}

function getTransports() {
  return [console_log, file_log];
}

let defaultLogger = new Logger({
  transports: getTransports(),
  tag: 'default',
});

class LogFactory {
  constructor() {
    this.loggers = {};
  }
  getLogger(tag) {
    let _logger = this.loggers[tag];
    if (!_logger) {
      defaultLogger.info(`init logger [${tag}]`);
      _logger = new Logger({
        transports: getTransports(),
        tag: tag,
      });
      this.loggers[tag] = _logger;
    }
    return _logger;
  }
}

export default new LogFactory();
