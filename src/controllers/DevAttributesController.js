/**
 * @author Gabriel Micah & Oluwasegun Matthews
 *
 * @requires NPM:sequelize
 * @requires ./models
*/

import model from '../models';

const DevAttributes = model.DevAttribute;
const DevAttributeSkills = model.DevAttributeSkill;

/**
 * @class DevAttributesController
 */
export default class DevAttributesController {
  /**
   * @param  {object} req - HTTP request Object
   * @param  {object} res - HTTP response Object
   * @return {object} A list of all Dev Attributes
   */
  static async getAllDevAttributes(req, res) {
    try {
      const devAttributes = await DevAttributes.findAll();
      if (!devAttributes) {
        throw new Error('Internal Server Error');
      }
      return res.withSuccess({ devAttributes });
    } catch (error) {
      return res.withError({ message: error.message }, 500);
    }
  }

  /**
   * @param  {object} req - HTTP request Object
   * @param  {object} res - HTTP response Object
   * @return {object} A list of all Dev Attributes skills
   */
  static async getDevAttributeSkills(req, res) {
    try {
      const devAttrSkills = await DevAttributeSkills.findAll({
        attributes: ['id', 'skillId', 'devAttributeId'],
        include: [{
          model: model.DevAttribute,
          required: true,
          as: 'devAttribute',
          attributes: ['name']
        }, {
          model: model.Skill,
          required: true,
          as: 'skill',
          attributes: ['name', 'level']
        }]
      });
      if (!devAttrSkills) {
        throw new Error('Internal Server Error');
      }
      return res.withSuccess({ devAttrSkills });
    } catch (error) {
      return res.withError({ message: error.message }, 500);
    }
  }

  /**
   * @param  {object} req - HTTP request Object
   * @param  {object} res - HTTP response Object
   * @return {object} a single Dev Attribute
   */
  static async getDevAttribute(req, res) {
    const { devAttributeId } = req.params;
    try {
      const devAttribute = await DevAttributes.findOne({
        where: {
          id: devAttributeId,
        },
        attributes: ['id', 'name'],
        include: [{
          model: model.DevAttributeSkill,
          required: true,
          as: 'devAttributeSkills',
          attributes: ['id', 'skillId', 'devAttributeId'],
          include: [{
            model: model.Skill,
            required: true,
            as: 'skill',
            attributes: ['name', 'level']
          }]
        }]
      });
      if (!devAttribute) {
        return res.withError({ message: 'No Dev Attribute Was Found' }, 404);
      }
      return res.withSuccess({ devAttribute });
    } catch (error) {
      return res.withError({ message: error.message }, 500);
    }
  }
}
