/**
 * @author Oluwasegun Matthews
 *
*/


/**
 * @class Validator
 */
export default class Validator {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns {*} response
   */
  static async validateParams(req, res, next) {
    const key = Object.keys(req.params)[0];
    const id = req.params[key];
    if (id && isNaN(id)) {
      return res.withError({ message: 'Invalid request' }, 400);
    }
    next();
  }
}
