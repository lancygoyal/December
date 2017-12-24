/* -----------------------------------------------------------------------
   * @ description : This is the contribute service layer.
----------------------------------------------------------------------- */

import Contribute from '../collections/contribute';
import Messages from '../utilities/messages';
// import * as Universal from '../utilities/universal';
import { get as getItem, collect } from './item';

export const contri = async payload => {
  await Contribute.contri(payload);
  return;
};

export const pickup = async payload => {
  const contriData = await Contribute.get(payload.contriId);
  if (contriData.isPicked) throw new Error(Messages.itemAlreadyPicked);
  if (contriData.itemId.createdBy != payload.user._id) throw new Error(Messages.unauthorizedUser);
  await Contribute.pickupItem(payload.contriId);
  await collect(contriData);
  return;
};

export const get = async payload => {
  const contries = await Contribute.getContri(payload.itemId),
    data = await getItem(payload);
  return { ...data, list: contries };
};

export const list = async payload => {
  return await Contribute.myContributions(payload._id);
};
