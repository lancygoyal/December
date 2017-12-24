import Joi from 'joi';
import { getItem } from '../../../controllers/item';

export default {
  method: 'GET',
  path: '/api/v1/item/{itemId}',
  config: {
    auth: 'jwt',
    description: 'Api service used to get item.',
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
  handler: getItem
};
