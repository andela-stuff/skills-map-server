/**
 * @fileOverview Application's entry point
 *
 * @author Gabriel Micah
 *
 * @requires NPM:express
 * @requires ../controllers/DevAttributesController
 */

import express from 'express';
import DevAttributesController from '../controllers/DevAttributesController';
import middlewares from '../middlewares';

const devAttributeRouter = express.Router();

devAttributeRouter.get('/devAttr', DevAttributesController.getAllDevAttributes);
devAttributeRouter.get('/devAttr/:devAttributeId', middlewares.Validator.validateParams, DevAttributesController.getDevAttribute);
devAttributeRouter.get('/devAttrSkills', DevAttributesController.getDevAttributeSkills);

export default devAttributeRouter;
