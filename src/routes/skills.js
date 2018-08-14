/**
 * @fileOverview Application's entry point
 *
 * @author Oluwasegun Matthews
 *
 * @requires NPM:express
 * @requires ../controllers/SkillController
 */

import express from 'express';
import SkillController from '../controllers/SkillController';
import middlewares from '../middlewares';

const skillRouter = express.Router();

skillRouter.get('/skills', SkillController.getAllSkills);
skillRouter.get('/skills/:skillId', middlewares.Validator.validateParams, SkillController.getSkill);

export default skillRouter;
