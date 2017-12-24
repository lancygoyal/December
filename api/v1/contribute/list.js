import Joi from 'joi';
import { listContri } from '../../../controllers/contribute';

export default {
  method: 'GET',
  path: '/api/v1/contribute/list',
  config: {
    auth: 'jwt',
    description: 'Api service used to get contri list.',
    notes: '<br/>The request object should contain following fields in its <b>Headers</b> object',
    tags: ['api'],
    validate: {
      headers: Joi.object({
        authorization: Joi.string()
          .trim()
          .required()
      }).options({ allowUnknown: true })
    }
  },
  handler: listContri
};
