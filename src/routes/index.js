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

const api = '/api/';

export default (app) => {
  app.use(api, skillRoutes);
  app.use(api, devAttributeRouter);
  app.use(api, lmsOutputRouter);
  app.use(api, skillSessionRouter);
};
