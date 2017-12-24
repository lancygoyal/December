/* -----------------------------------------------------------------------
   * @ description : This is the item controller layer.
----------------------------------------------------------------------- */

import { add, list } from '../services/item';
import { failAction, successAction } from '../utilities/rest';
import Messages from '../utilities/messages';
// import logger from '../utilities/logger';

export const addItem = async (request, h) => {
  const { auth: { credentials: { user } }, payload } = request;
  if(user.role==='user') failAction(Messages.unauthorizedUser);
  try {
    const data = await add({...payload, createdBy: user._id});
    return successAction(data, Messages.itemAdded);
  } catch (error) {
    failAction(error.message);
  }
};

export const listItem = async (request, h) => {
  const { auth: { credentials: { user } } } = request;
  if(user.role==='user') failAction(Messages.unauthorizedUser);
  try {
    const data = await list(user);
    return successAction(data);
  } catch (error) {
    failAction(error.message);
  }
};
