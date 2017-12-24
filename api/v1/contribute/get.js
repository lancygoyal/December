import Joi from 'joi';
import { getContriByItem } from '../../../controllers/contribute';

export default {
  method: 'GET',
  path: '/api/v1/contribute/{itemId}',
  config: {
    auth: 'jwt',
    description: 'Api service used to get item contributions.',
    notes: '<br/>The request object should contain following fields in its <b>Headers</b> object',
    tags: ['api'],
    validate: {
      headers: Joi.object({
        authorization: Joi.string()
          .trim()
          .required()
      }).options({ allowUnknown: true }),
      params: Joi.object({
        itemId: Joi.string().required()
      })
    }
  },
  handler: getContriByItem
};
