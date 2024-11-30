import createHttpError from 'http-errors';
import { ShopCollection } from '../db/models/shop.js';
import { ShopProductCollection } from '../db/models/shopProduct.js';


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

  export const updateShop = async (shopId, payload, options = {}) => {
    const rawResult = await ShopCollection.findOneAndUpdate(
      { _id: shopId },
      payload,
      {
        new: true,
        includeResultMetadata: true,
        ...options,
      },
    );

    if (!rawResult || !rawResult.value) return null;

    return {
      shop: rawResult.value,
      isNew: Boolean(rawResult?.lastErrorObject?.upserted),
    };
  };

  export const addProductToShop = async (shopId, payload) => {
    const product = new ShopProductCollection({
      ...payload,
      shopId,
    });

    return await product.save();
  };

  export const getProductsByShopId = async (shopId) => {
    const products = await ShopProductCollection.find({ shopId });
    return products;
  };

  export const getProductById = async (shopId, productId) => {
    const product = await ShopProductCollection.findById({ _id: productId, shopId });
    return product;
  };

  export const updateProductById = async (shopId, productId, payload = {}) => {
    const product = await ShopProductCollection.findOneAndUpdate(
      { _id: productId, shopId },
      payload,
      {
        new: true,
      },
    );

    return product;
  };

  export const deleteProductById = async (shopId, productId) => {
    const product = await ShopProductCollection.findOneAndDelete({
        _id: productId, shopId
    });

    return product;
  };
