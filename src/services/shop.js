import createHttpError from 'http-errors';
import { ShopCollection } from '../db/models/shop.js';


export const createShop = async (payload) => {
  const shop = await ShopCollection.findOne({ email: payload.email });
  if (shop) throw createHttpError(409, 'Email in use');


  return await ShopCollection.create({
    ...payload,
  });
};

  export const getShopInfo = async (shopId) => {
    const shop = await ShopCollection.findById(shopId, 'name owner email phone address city zip delivery');
    if (!shop) {
      throw new createHttpError(404, 'Shop not found');
    }
    return shop;
  };
