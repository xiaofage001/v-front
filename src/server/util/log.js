import winston from 'winston';

const consoleLog = new winston.transports.Console({
  colorize: true,
  level: 'debug',
});

const fileLog = new winston.transports.File({
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
  log(...args) {
    const rawMsg = args[1];
    super.log.apply(this, [args[0], `[${this.tag}] ${rawMsg}`]);
  }
}

function getTransports() {
  return [consoleLog, fileLog];
}

const defaultLogger = new Logger({
  transports: getTransports(),
  tag: 'default',
});

class LogFactory {
  constructor() {
    this.loggers = {};
  }
  getLogger(tag) {
    let logger = this.loggers[tag];
    if (!logger) {
      defaultLogger.info(`init logger [${tag}]`);
      logger = new Logger({
        transports: getTransports(),
        tag,
      });
      this.loggers[tag] = logger;
    }
    return logger;
  }
}

export default new LogFactory();
