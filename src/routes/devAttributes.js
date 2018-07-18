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

const devAttributeRouter = express.Router();

devAttributeRouter.get('/devAttr', DevAttributesController.getAllDevAttributes);

export default devAttributeRouter;
