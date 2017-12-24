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

export const get = async payload => {
  return await Item.getItem(payload.itemId);
};

export const search = async payload => {
  let name = payload.text && payload.text != '' ? Universal.buildRegExp(payload.text) : null,
    category = payload.category && payload.category != '' ? payload.category : null;
  return await Item.searchItems(name, category);
};
