/**
 * @author Oluwasegun Matthews & Gabriel Micah
 *
 * @requires NPM:sequelize
 * @requires ./models
*/

import model from '../models';

const { Skill } = model;

/**
 * @class SkillController
 */
export default class SkillController {
  /**
   * @param  {object} req
   * @param  {object} res
   * @return {object} response data
   */
  static async getAllSkills(req, res) {
    try {
      const skill = await Skill.findAll();
      if (!skill) {
        throw new Error('error occured');
      } else {
        res.json(skill);
      }
    } catch (error) {
      res.json({ message: error.message });
    }
  }
}
