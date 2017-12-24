import Joi from 'joi';
import { pickupContri } from '../../../controllers/contribute';

export default {
  method: 'PUT',
  path: '/api/v1/contribute/{contriId}/pickup',
  config: {
    auth: 'jwt',
    description: 'Api service used to pickup contributed item.',
    notes:
      '<br/>The request object should contain following fields in its <b>Payload/Body</b> object',
    tags: ['api', 'contribute'],
    validate: {
      headers: Joi.object({
        authorization: Joi.string()
          .trim()
          .required()
      }).options({ allowUnknown: true }),
      params: Joi.object({
        contriId: Joi.string().required()
      })
    }
  },
  handler: pickupContri
};
