/* -----------------------------------------------------------------------
   * @ description : This file defines the items schema for mongodb.
----------------------------------------------------------------------- */

import Mongoose from 'mongoose';
import { getTimeStamp } from '../utilities/universal';

const Schema = Mongoose.Schema;

class ItemClass {}

const ItemSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  info: { type: String, required: true },
  location: { type: String, required: true },
  createdBy: { type: String, required: true },
  status: { type: Number, default: 1 },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Number, default: getTimeStamp },
  updatedAt: { type: Number, default: getTimeStamp }
});

ItemSchema.loadClass(ItemClass);

export default Mongoose.model('Item', UserSchema);
