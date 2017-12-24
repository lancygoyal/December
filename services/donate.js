/* -----------------------------------------------------------------------
   * @ description : This is the donate service layer.
----------------------------------------------------------------------- */

import Donate from '../collections/donate';
import Messages from '../utilities/messages';
// import * as Universal from '../utilities/universal';
import { getItemInfo, donate as donateItem } from './item';

export const donate = async payload => {
  const itemData = await getItemInfo(payload);
  if (itemData.createdBy != payload.user._id) throw new Error(Messages.unauthorizedUser);
  let itemRemains =
    itemData.category === 'goods'
      ? itemData.itemCollected - itemData.itemDonated
      : itemData.moneyCollected - itemData.moneyDonated;
  if (itemRemains < payload.quantity)
    throw new Error(Messages.itemLeft(itemRemains, itemData.category.capitalizeFirstLetter()));
  delete payload.user;
  await Donate.donateItem(payload);
  await donateItem({ ...payload, itemId: itemData });
  return { itemLeft: itemRemains - payload.quantity };
};

export const getItemDonations = async payload => {
  const itemData = await getItemInfo(payload);
  if (itemData.createdBy != payload.user._id) throw new Error(Messages.unauthorizedUser);
  return await Donate.getDonationByItem(payload.itemId);
};
