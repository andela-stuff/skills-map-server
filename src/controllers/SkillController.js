/**
 * @author Oluwasegun Matthews & Gabriel Micah
 *
 * @requires NPM:sequelize
 * @requires ./models
*/

import model from '../models';

const Skills = model.Skill;

/**
 * @class SkillController
 */
export default class SkillController {
  /**
   * @param  {object} req - HTTP request Object
   * @param  {object} res - HTTP response Object
   * @return {object} A list of all Skills
   */
  static async getAllSkills(req, res) {
    try {
      const skills = await Skills.findAll();
      if (!skills) {
        throw new Error('Internal Server Error');
      } else {
        res.withSuccess({ skills });
      }
    } catch (error) {
      res.withError({ message: error.message }, 500);
    }
  }

  /**
   *
   * @param {object} skillCount
   * @returns {object} skill statistics
   */
  static async getStatistics(skillCount) {
    const getPercent = (commonCount, totalCount) => Math.ceil((commonCount / totalCount) * 100);

    const lmsCount = await model.LmsOutput.count();
    const devAttrCount = await model.DevAttribute.count();
    const skillSessionCount = await model.SkillSession.count();

    return {
      percentInLms: getPercent(skillCount.skillInLms, lmsCount),
      percentInDevAttr: getPercent(skillCount.skillInDevAttr, devAttrCount),
      percentInSkillSesh: getPercent(skillCount.skillInSkillSession, skillSessionCount)
    };
  }

  /**
   * @param  {object} req - HTTP request Object
   * @param  {object} res - HTTP response Object
   * @return {object} a single skill
   */
  static async getSkill(req, res) {
    const { skillId } = req.params;
    try {
      const skill = await Skills.findOne({
        where: {
          id: skillId
        },
        attributes: ['id', 'name', 'level'],
        include: [{
          model: model.DevAttributeSkill,
          required: true,
          as: 'devAttributes',
          attributes: ['id', 'skillId', 'devAttributeId'],
          include: [{
            model: model.DevAttribute,
            required: true,
            as: 'devAttribute',
            attributes: ['name']
          }]
        }, {
          model: model.LmsOutputSkill,
          required: true,
          as: 'lmsOutputs',
          attributes: ['id', 'skillId', 'lmsOutputId'],
          include: [{
            model: model.LmsOutput,
            required: true,
            as: 'lmsOutput',
            attributes: ['name', 'level']
          }]
        }, {
          model: model.SkillSessionSkill,
          required: true,
          as: 'skillSessions',
          attributes: ['id', 'skillId', 'skillSessionId'],
          include: [{
            model: model.SkillSession,
            required: true,
            as: 'skillSession',
            attributes: ['name']
          }]
        }]
      });

      if (!skill) {
        return res.withError('No Skill Found', 404);
      }

      const skillCount = {};
      skillCount.skillInLms = skill.lmsOutputs.length;
      skillCount.skillInDevAttr = skill.devAttributes.length;
      skillCount.skillInSkillSession = skill.skillSessions.length;

      const skillStats = await SkillController.getStatistics(skillCount);

      res.withSuccess({ skill }, 200, { ...skillCount, ...skillStats });
    } catch (error) {
      res.withError({ message: error.message }, 500);
    }
  }
}
