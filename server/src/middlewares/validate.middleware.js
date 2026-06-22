import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../constants/index.js';

const validate = (schema) => async (req, res, next) => {
  try {
    const parsedData = await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    req.body = parsedData.body;
    req.query = parsedData.query;
    req.params = parsedData.params;

    next(); 
  } catch (error) {
    const errorMessages = error.errors?.map((err) => ({
      field: err.path[1],
      message: err.message, 
    })) || [];

    const apiError = new ApiError(
      HTTP_STATUS.BAD_REQUEST,
      "Validation Failed",
      errorMessages
    );

    next(apiError); 
  }
};

export default validate;