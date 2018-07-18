/**
 * @author Gabriel Micah
 *
 * @requires NPM:sequelize
 * @requires ./models
*/

import model from '../models';

const { SkillSession } = model;

/**
 * @class SkillSessionController
 */
export default class SkillSessionController {
  /**
   * @param  {object} req
   * @param  {object} res
   * @return {object} response data
   */
  static async getAllSkillSessions(req, res) {
    try {
      const skillSession = await SkillSession.findAll();
      if (!skillSession) {
        throw new Error('error occured');
      } else {
        res.json(skillSession);
      }
    } catch (error) {
      res.json({ message: error.message });
    }
  }
}
