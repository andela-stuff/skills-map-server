/**
 * @author Gabriel Micah
 *
 * @requires NPM:sequelize
 * @requires ./models
*/

import model from '../models';

const { DevAttribute } = model;

/**
 * @class DevAttributesController
 */
export default class DevAttributesController {
  /**
   * @param  {object} req
   * @param  {object} res
   * @return {object} response data
   */
  static async getAllDevAttributes(req, res) {
    try {
      const devAttribute = await DevAttribute.findAll();
      if (!devAttribute) {
        throw new Error('error occured');
      } else {
        res.json(devAttribute);
      }
    } catch (error) {
      res.json({ message: error.message });
    }
  }
}
