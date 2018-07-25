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
import middlewares from '../middlewares';

const lmsOutputRouter = express.Router();

lmsOutputRouter.get('/lms', LmsOutputsController.getAllLmsOutputs);
lmsOutputRouter.get('/lmsSkills', LmsOutputsController.getLmsSkills);
lmsOutputRouter.get('/lms/:lmsOutputId', middlewares.Validator.validateParams, LmsOutputsController.getLmsOutput);

export default lmsOutputRouter;
