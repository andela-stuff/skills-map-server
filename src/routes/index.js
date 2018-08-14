/**
 *
 * @author Oluwasegun Matthews
 *
 * @requires ./skills
 */

import skillRoutes from './skills';
import devAttributeRouter from './devAttributes';
import lmsOutputRouter from './lmsOutput';
import skillSessionRouter from './skillSession';
import middlewares from '../middlewares';

const api = '/api/';

export default (app) => {
  app.use(api, middlewares.responsApi, skillRoutes);
  app.use(api, middlewares.responsApi, devAttributeRouter);
  app.use(api, middlewares.responsApi, lmsOutputRouter);
  app.use(api, middlewares.responsApi, skillSessionRouter);
};
