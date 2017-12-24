import Joi from 'joi';
import { addContri } from '../../../controllers/contribute';

export default {
  method: 'POST',
  path: '/api/v1/contribute/{itemId}',
  config: {
    auth: 'jwt',
    description: 'Api service used to contribute a new item.',
    notes:
      '<br/>The request object should contain following fields in its <b>Payload/Body</b> object',
    tags: ['api'],
    validate: {
      headers: Joi.object({
        authorization: Joi.string()
          .trim()
          .required()
      }).options({ allowUnknown: true }),
      params: Joi.object({
        itemId: Joi.string().required()
      }),
      payload: {
        quantity: Joi.number()
          .required()
          .label('Item Quantity')
      }
    }
  },
  handler: addContri
};
