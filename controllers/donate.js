/* -----------------------------------------------------------------------
   * @ description : This is the donate controller layer.
----------------------------------------------------------------------- */

import { donate, getItemDonations } from '../services/donate';
import { failAction, successAction } from '../utilities/rest';
import Messages from '../utilities/messages';
// import logger from '../utilities/logger';

export const donateItem = async (request, h) => {
  const { auth: { credentials: { user } }, params, payload } = request;
  try {
    const data = await donate({ ...payload, ...params, user });
    return successAction(data, Messages.itemDonated);
  } catch (error) {
    failAction(error.message);
  }
};

export const getDonationByItem = async (request, h) => {
  const { auth: { credentials: { user } }, params } = request;
  try {
    const data = await getItemDonations({ ...params, user });
    return successAction(data);
  } catch (error) {
    failAction(error.message);
  }
};
