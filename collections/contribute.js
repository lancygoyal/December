/* -----------------------------------------------------------------------
   * @ description : This file defines the contribution schema for mongodb.
----------------------------------------------------------------------- */

import Mongoose from 'mongoose';
import { getTimeStamp } from '../utilities/universal';

const Schema = Mongoose.Schema;

class ContributeClass {}

const ContributeSchema = new Schema({
  itemId: { type: String, required: true },
  quantity: { type: String, required: true },
  contributeBy: { type: String, required: true },
  contributeMethod: { type: String, required: true },
  status: { type: Number, default: 1 },
  createdAt: { type: Number, default: getTimeStamp },
  updatedAt: { type: Number, default: getTimeStamp }
});

ContributeSchema.loadClass(ContributeClass);

export default Mongoose.model('Contribute', UserSchema);
