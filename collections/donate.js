/* -----------------------------------------------------------------------
   * @ description : This file defines the donation schema for mongodb.
----------------------------------------------------------------------- */

import Mongoose from 'mongoose';
import { getTimeStamp } from '../utilities/universal';

const Schema = Mongoose.Schema;

class DonateClass {
  static getDonationByItem(itemId) {
    return this.find({ itemId }).select({ __v: 0 });
  }
  static donateItem(payload) {
    return this(payload).save();
  }
}

const DonateSchema = new Schema({
  itemId: { type: String, required: true, ref: 'Item' },
  detail: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  createdAt: { type: Number, default: getTimeStamp },
  updatedAt: { type: Number, default: getTimeStamp }
});

DonateSchema.loadClass(DonateClass);

export default Mongoose.model('Donate', DonateSchema);
