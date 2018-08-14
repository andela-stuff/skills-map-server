/**
 * @author Gabriel Micah
 *
 * @requires NPM:sequelize
 * @requires ./models
*/

import model from '../models';

const SkillSessions = model.SkillSession;
const SkillSessionSkills = model.SkillSessionSkill;

/**
 * @class SkillSessionController
 */
export default class SkillSessionController {
  /**
   * @param  {object} req - HTTP request Object
   * @param  {object} res - HTTP response Object
   * @return {object} - A list of all Skill Sessions
   */
  static async getAllSkillSessions(req, res) {
    try {
      const skillSessions = await SkillSessions.findAll();
      if (!skillSessions) {
        throw new Error('error occured');
      } else {
        res.withSuccess({ skillSessions });
      }
    } catch (error) {
      res.withError({ message: error.message }, 500);
    }
  }

  /**
   * @param  {object} req - HTTP request Object
   * @param  {object} res - HTTP response Object
   * @return {object} - A single SKill Session
   */
  static async getSkillSession(req, res) {
    const { skillSessionId } = req.params;
    try {
      const skillSession = await SkillSessions.findOne({
        where: {
          id: skillSessionId,
        },
        attributes: ['id', 'name'],
        include: [
          {
            model: model.SkillSessionSkill,
            required: true,
            as: 'skillSessionSkills',
            attributes: ['skillId'],
            include: [{
              model: model.Skill,
              required: true,
              as: 'skill',
              attributes: ['name', 'level']
            }]
          }
        ]
      });
      if (!skillSession) {
        return res.withError({ message: 'No Skill Session Was Found' }, 404);
      }
      res.withSuccess({ skillSession });
    } catch (error) {
      res.withError({ error: error.message }, 500);
    }
  }


  /**
   * @param  {object} req - HTTP request Object
   * @param  {object} res - HTTP response Object
   * @return {object} - A list of all Skill Sessionsion Skills
   */
  static async getSkillSessionSkills(req, res) {
    try {
      const skillSessionSkills = await SkillSessionSkills.findAll({
        attributes: ['id', 'skillId', 'skillSessionId'],
        include: [{
          model: model.SkillSession,
          required: true,
          as: 'skillSession',
          attributes: ['name']
        }, {
          model: model.Skill,
          required: true,
          as: 'skill',
          attributes: ['name', 'level']
        }]
      });
      if (!skillSessionSkills) {
        throw new Error('error occured');
      } else {
        res.withSuccess({ skillSessionSkills });
      }
    } catch (error) {
      res.withError({ message: error.message }, 500);
    }
  }
}
