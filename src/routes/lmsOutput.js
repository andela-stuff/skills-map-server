/**
 * @fileOverview Application's entry point
 *
 * @author Gabriel Micah
 *
 * @requires NPM:express
 * @requires ../controllers/LmsOutputController
 */

import express from 'express';
import LmsOutputsController from '../controllers/LmsOutputsController';

const lmsOutputRouter = express.Router();

lmsOutputRouter.get('/lmsOutputs', LmsOutputsController.getAllLmsOutputs);

export default lmsOutputRouter;
