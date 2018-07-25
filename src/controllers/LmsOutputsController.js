/**
 * @author Gabriel Micah & Oluwasegun Matthews
 *
 * @requires NPM:sequelize
 * @requires ./models
*/

import model from '../models';

const LmsOutputs = model.LmsOutput;
const LmsOutputSkills = model.LmsOutputSkill;

/**
 * @class LmsOutputController
 */
export default class LmsOutputController {
  /**
   * @param  {object} req - HTTP request Object
   * @param  {object} res - HTTP response Object
   * @return {object} A list of all Lms Output
   */
  static async getAllLmsOutputs(req, res) {
    try {
      const lmsOutputs = await LmsOutputs.findAll();
      if (!lmsOutputs) {
        throw new Error('Internal Server Error');
      } else {
        return res.withSuccess({ lmsOutputs });
      }
    } catch (error) {
      return res.withError({ message: error.message });
    }
  }

  /**
   * @param  {object} req - HTTP request Object
   * @param  {object} res - HTTP response Object
   * @return {object} A list of all Lms Output Skills
   */
  static async getLmsSkills(req, res) {
    try {
      const lmsSkills = await LmsOutputSkills.findAll({
        attributes: ['id', 'skillId', 'lmsOutputId'],
        include: [{
          model: model.LmsOutput,
          required: true,
          as: 'lmsOutput',
          attributes: ['name', 'level']
        }, {
          model: model.Skill,
          required: true,
          as: 'skill',
          attributes: ['name', 'level']
        }]

      });
      if (!lmsSkills) {
        throw new Error('Internal Server Error');
      } else {
        return res.withSuccess({ lmsSkills });
      }
    } catch (error) {
      return res.withError({ error: error.message }, 500);
    }
  }

  /**
   * @param  {object} req - HTTP request Object
   * @param  {object} res - HTTP response Object
   * @return {object} A single Lms Output
   */
  static async getLmsOutput(req, res) {
    const { lmsOutputId } = req.params;
    try {
      const lmsOutput = await LmsOutputs.findOne({
        where: {
          id: lmsOutputId,
        },
        attributes: ['id', 'name', 'level'],
        include: [
          {
            model: model.LmsOutputSkill,
            required: true,
            as: 'lmsOutputSkills',
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
      if (!lmsOutput) {
        return res.withError({ message: 'No LMS Output Was Found' }, 404);
      }
      return res.withSuccess({ lmsOutput });
    } catch (error) {
      return res.withError({ message: error.message }, 500);
    }
  }
}
