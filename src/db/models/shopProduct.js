// import { model, Schema } from 'mongoose';

// const shopProductSchema = new Schema({
//   photo: {
//     type: String,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   suppliers: {
//     type: String,
//     required: true,
//   },
//   stock: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
// });

// export const ShopProductCollection = model('shopProduct', shopProductSchema);

import { model, Schema } from 'mongoose';

const shopProductSchema = new Schema(
  {
    photo: { type: String, required: true },
    name: { type: String, required: true },
    suppliers: { type: String, required: true },
    stock: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    shopId: { type: Schema.Types.ObjectId, ref: 'shop', required: true },
  },
);

export const ShopProductCollection = model('shopProduct', shopProductSchema);
