import Joi from 'joi';
import { searchItem } from '../../../controllers/item';

export default {
  method: 'GET',
  path: '/api/v1/item/search',
  config: {
    auth: 'jwt',
    description: 'Api service used to search items.',
    notes: '<br/>The request object should contain following fields in its <b>Headers</b> object',
    tags: ['api'],
    validate: {
      headers: Joi.object({
        authorization: Joi.string()
          .trim()
          .required()
      }).options({ allowUnknown: true }),
      query: Joi.object({
        text: Joi.string().trim(),
        category: Joi.string()
          .trim()
          .valid('goods', 'money')
      })
    }
  },
  handler: searchItem
};
