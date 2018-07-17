/**
 * @fileOverview Application's entry point
 *
 * @author Oluwasegun Matthews
 *
 * @requires NPM:express
 * @requires NPM:morgan
 * @requires NPM:cors
 * @requires NPM:bodyParser
 * @requires NPM:dotenv
 * @requires ./utils/logger
 */

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import winston from './utils/logger';

dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || 'development';


const app = express();

const port = parseInt(process.env.PORT, 10) || 8008;

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(200).send({
  message: 'This is skill-map-server',
}));

app.listen(port, () => {
  winston('info', `Server running on port ${port}`);
});
