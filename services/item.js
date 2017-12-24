/* -----------------------------------------------------------------------
   * @ description : This is the item service layer.
----------------------------------------------------------------------- */

import Item from '../collections/item';
// import Messages from '../utilities/messages';
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

export const getItemInfo = async payload => {
  return await Item.getItemInfo(payload.itemId);
};

export const search = async payload => {
  let name = payload.text && payload.text != '' ? Universal.buildRegExp(payload.text) : null,
    category = payload.category && payload.category != '' ? payload.category : null;
  return await Item.searchItems(name, category);
};

export const collect = async payload => {
  return await Item.collectItem(payload.itemId._id, payload.itemId.category, payload.quantity);
};

export const donate = async payload => {
  return await Item.donateItem(payload.itemId, payload.itemId.category, payload.quantity);
};
