import Joi from 'joi';
import { addItem } from '../../../controllers/item';

export default {
  method: 'POST',
  path: '/api/v1/item/add',
  config: {
    auth: 'jwt',
    description: 'Api service used to add a new item.',
    notes:
      '<br/>The request object should contain following fields in its <b>Payload/Body</b> object',
    tags: ['api', 'item'],
    validate: {
      headers: Joi.object({
        authorization: Joi.string()
          .trim()
          .required()
      }).options({ allowUnknown: true }),
      payload: {
        name: Joi.string()
          .trim()
          .required()
          .min(2)
          .max(30)
          .label('Item Name'),
        category: Joi.string()
          .trim()
          .required()
          .min(2)
          .max(20)
          .label('Category')
          .valid('goods', 'money'),
        info: Joi.string()
          .trim()
          .label('Info'),
        location: Joi.string()
          .trim()
          .required()
          .min(2)
          .max(20)
          .label('Location')
      }
    }
  },
  handler: addItem
};
