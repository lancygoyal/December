/* -----------------------------------------------------------------------
   * @ description : This file defines the contribution schema for mongodb.
----------------------------------------------------------------------- */

import Mongoose from 'mongoose';
import { getTimeStamp } from '../utilities/universal';

const Schema = Mongoose.Schema;

class ContributeClass {
  static get(contriId) {
    return this.findById(contriId)
      .select({ itemId: 1, quantity: 1, isPicked: 1 })
      .populate('itemId', 'category createdBy');
  }
  static getContri(itemId) {
    return this.find({ itemId })
      .select({ itemId: 0, __v: 0 })
      .populate('contributeBy', '-_id fullName email');
  }
  static myContributions(contributeBy) {
    return this.find({ contributeBy })
      .select({ __v: 0 })
      .populate({
        path: 'itemId',
        select: '-_id name category info location createdBy',
        populate: { path: 'createdBy', select: '-_id fullName email' }
      })
      .populate('contributeBy', '-_id fullName email');
  }
  static contri(payload) {
    return this(payload).save();
  }
  static pickupItem(contriId) {
    let updateData = {
      $set: {
        isPicked: true,
        updatedAt: getTimeStamp()
      }
    };

    return this.findByIdAndUpdate(contriId, updateData, { new: true });
  }
}

const ContributeSchema = new Schema({
  itemId: { type: String, required: true, ref: 'Item' },
  contributeBy: { type: String, required: true, ref: 'User' },
  quantity: { type: Number, required: true },
  isPicked: { type: Boolean, default: false },
  createdAt: { type: Number, default: getTimeStamp },
  updatedAt: { type: Number, default: getTimeStamp }
});

ContributeSchema.loadClass(ContributeClass);

export default Mongoose.model('Contribute', ContributeSchema);
