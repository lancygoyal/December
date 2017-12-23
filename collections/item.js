/* -----------------------------------------------------------------------
   * @ description : This file defines the items schema for mongodb.
----------------------------------------------------------------------- */

import Mongoose from 'mongoose';
import { getTimeStamp } from '../utilities/universal';

const Schema = Mongoose.Schema;

class ItemClass {
  static getMyItems(createdBy) {
    return this.find({ createdBy, isDeleted: false });
  }
  static getItems(name, category) {
    let selector = { isDeleted: false };
    if (name) selector.name = { $regex: name };
    if (category) selector.category = category;
    return this.find(selector);
  }
  static getItem(itemId) {
    return this.findOne({ _id: itemId, isDeleted: false });
  }
  static addItem(payload) {
    return this(payload).save();
  }
  static getCategories() {
    return this.find({ isDeleted: false });
  }
  static collectItem(itemId, quantity) {
    let updateData = {
      $add: { itemCollected: quantity },
      $set: {
        updatedAt: getTimeStamp()
      }
    };

    return this.findAndUpdate({ _id: itemId, isDeleted: false }, updateData, { new: true });
  }
  static donateItem(itemId, quantity) {
    let updateData = {
      $sub: { itemDonated: quantity },
      $set: {
        updatedAt: getTimeStamp()
      }
    };

    return this.findAndUpdate({ _id: itemId, isDeleted: false }, updateData, { new: true });
  }
  static collectMoney(itemId, quantity) {
    let updateData = {
      $add: { moneyCollected: quantity },
      $set: {
        updatedAt: getTimeStamp()
      }
    };

    return this.findAndUpdate({ _id: itemId, isDeleted: false }, updateData, { new: true });
  }
  static donateMoney(itemId, quantity) {
    let updateData = {
      $add: { moneyDonated: quantity },
      $set: {
        updatedAt: getTimeStamp()
      }
    };

    return this.findAndUpdate({ _id: itemId, isDeleted: false }, updateData, { new: true });
  }
}

const ItemSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  info: { type: String, default: '' },
  location: { type: String, required: true },
  itemCollected: { type: Number, default: 0 },
  itemDonated: { type: Number, default: 0 },
  moneyCollected: { type: Number, default: 0 },
  moneyDonated: { type: Number, default: 0 },
  createdBy: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Number, default: getTimeStamp },
  updatedAt: { type: Number, default: getTimeStamp }
});

ItemSchema.loadClass(ItemClass);

export default Mongoose.model('Item', UserSchema);
