/**
 * @fileOverview Application's entry point
 *
 * @author Gabriel Micah
 *
 * @requires NPM:express
 * @requires ../controllers/SkillSession
 */

import express from 'express';
import SkillSessionController from '../controllers/SkillSessionController';

const skillSessionRouter = express.Router();

skillSessionRouter.get('/skillSession', SkillSessionController.getAllSkillSessions);

export default skillSessionRouter;
