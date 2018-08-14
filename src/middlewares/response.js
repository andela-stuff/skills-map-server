/**
 * @author Oluwasegun Matthews
 *
*/

const responseApi = (req, res, next) => {
  res.withSuccess = (data, status = 200, metadata) => {
    res.status(status).json({ data, metadata });
  };

  res.withError = (error, status, metadata) => {
    res.status(status).json({ error, metadata });
  };

  return next();
};

export default responseApi;
