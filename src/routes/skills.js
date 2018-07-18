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

const skillRouter = express.Router();

skillRouter.get('/skills', SkillController.getAllSkills);

export default skillRouter;
