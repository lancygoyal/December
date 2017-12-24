/* -----------------------------------------------------------------------
   * @ description : This file defines the contribution schema for mongodb.
----------------------------------------------------------------------- */

import Mongoose from 'mongoose';
import { getTimeStamp } from '../utilities/universal';

const Schema = Mongoose.Schema;

class ContributeClass {
  static getMyContribution(contributeBy) {
    return this.find({ contributeBy });
  }
  static getMyItemContribution(contributeId) {
    return this.findOne(contributeId);
  }
  static getItemContribution(itemId) {
    return this.find({ itemId });
  }
  static contributeItem(payload) {
    return this(payload).save();
  }
  static pickupItem(itemId) {
    let updateData = {
      $set: {
        isPicked: true,
        updatedAt: getTimeStamp()
      }
    };

    return this.findByIdAndUpdate(itemId, updateData, { new: true });
  }
}

const ContributeSchema = new Schema({
  itemId: { type: String, required: true },
  contributeBy: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  isPicked: { type: Boolean, default: false },
  createdAt: { type: Number, default: getTimeStamp },
  updatedAt: { type: Number, default: getTimeStamp }
});

ContributeSchema.loadClass(ContributeClass);

export default Mongoose.model('Contribute', ContributeSchema);
