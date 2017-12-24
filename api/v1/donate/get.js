import Joi from 'joi';
import { getDonationByItem } from '../../../controllers/donate';

export default {
  method: 'GET',
  path: '/api/v1/donate/{itemId}',
  config: {
    auth: 'jwt',
    description: 'Api service used to get item donations.',
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
  handler: getDonationByItem
};
