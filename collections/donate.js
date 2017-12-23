/* -----------------------------------------------------------------------
   * @ description : This file defines the donation schema for mongodb.
----------------------------------------------------------------------- */

import Mongoose from 'mongoose';
import { getTimeStamp } from '../utilities/universal';

const Schema = Mongoose.Schema;

class ContributeClass {}

const DonateSchema = new Schema({
  itemId: { type: String, required: true },
  doneteBy: { type: String, required: true },
  contributeBy: { type: String, required: true },
  info: { type: String, required: true },
  createdAt: { type: Number, default: getTimeStamp },
  updatedAt: { type: Number, default: getTimeStamp }
});

DonateSchema.loadClass(ContributeClass);

export default Mongoose.model('Donate', UserSchema);
