/* -----------------------------------------------------------------------
   * @ description : This is the item service layer.
----------------------------------------------------------------------- */

import Item from '../collections/item';
import Messages from '../utilities/messages';
import * as Universal from '../utilities/universal';

export const add = async payload => {
  await Item.addItem(payload);
  return;
};

export const list = async payload => {
 return await Item.getItems(payload._id);
};