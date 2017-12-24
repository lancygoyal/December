import Joi from 'joi';
import { listItem } from '../../../controllers/item';

export default {
  method: 'GET',
  path: '/api/v1/item/list',
  config: {
    auth: 'jwt',
    description: 'Api service used to get item list.',
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
  handler: listItem
};
