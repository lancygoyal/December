/* -----------------------------------------------------------------------
   * @ description : This is the contribute controller layer.
----------------------------------------------------------------------- */

import { contri, pickup, get, list } from '../services/contribute';
import { failAction, successAction } from '../utilities/rest';
import Messages from '../utilities/messages';
// import logger from '../utilities/logger';

export const addContri = async (request, h) => {
  const { auth: { credentials: { user } }, params, payload } = request;
  try {
    const data = await contri({ ...payload, ...params, contributeBy: user._id });
    return successAction(data, Messages.contriAdded);
  } catch (error) {
    failAction(error.message);
  }
};

export const pickupContri = async (request, h) => {
  const { auth: { credentials: { user } }, params } = request;
  if (user.role === 'user') failAction(Messages.unauthorizedUser);
  try {
    const data = await pickup({ ...params, user });
    return successAction(data, Messages.itemPicked);
  } catch (error) {
    failAction(error.message);
  }
};

export const getContri = async (request, h) => {
  const { params } = request;
  try {
    const data = await get(params);
    return successAction(data);
  } catch (error) {
    failAction(error.message);
  }
};

export const listContri = async (request, h) => {
  const { auth: { credentials: { user } } } = request;
  try {
    const data = await list(user);
    return successAction(data);
  } catch (error) {
    failAction(error.message);
  }
};
