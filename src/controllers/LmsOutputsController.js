/**
 * @author Gabriel Micah
 *
 * @requires NPM:sequelize
 * @requires ./models
*/

import model from '../models';

const { LmsOutput } = model;

/**
 * @class LmsOutputController
 */
export default class LmsOutputController {
  /**
   * @param  {object} req
   * @param  {object} res
   * @return {object} response data
   */
  static async getAllLmsOutputs(req, res) {
    try {
      const lmsOutput = await LmsOutput.findAll();
      if (!lmsOutput) {
        throw new Error('error occured');
      } else {
        res.json(lmsOutput);
      }
    } catch (error) {
      res.json({ message: error.message });
    }
  }
}
