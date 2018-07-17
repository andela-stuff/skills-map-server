/**
 * @fileOverview  Helper function for logger
 *
 * @author Oluwasegun Matthews
 *
 * @requires NPM:winston
 * @requires NPM:path
 *
 */

import winston, { format } from 'winston';
import path from 'path';

const fileLogger = config => new winston.transports.File(config);

const {
  combine,
  timestamp,
  label,
  prettyPrint,
} = format;

const config = winston.createLogger({
  format: combine(
    label({
      label: 'Skill-Map-Server',
    }),
    timestamp(),
    prettyPrint(),
  ),
  transports: [
    fileLogger({
      filename: path.join(__dirname, '../../logs/errors.log'),
      level: 'error',
    }),
    fileLogger({
      filename: path.join(__dirname, '../../logs/combined.log'),
    }),
    new winston.transports.Console({
      level: 'info',
      handleExceptions: true,
      json: false,
      colorize: true,
    }),
  ],
});

const logger = (level, message) => {
  config.log({
    level,
    message,
  });
  return {
    isLogged: true,
    message,
    level,
  };
};

export default logger;
