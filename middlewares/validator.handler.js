const boom = require('@hapi/boom')

//If the schema is ok this will validate the data
function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];

    const { error } = schema.validate(data, { abortEarly: false });
    if(error) {
      // in case that there's an error it will send it to the error handler.
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
