import createHttpError from 'http-errors';
import { createShop, getShopInfo } from '../services/shop.js';

export const createShopController = async (req, res) => {
  const shop = await createShop(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a shop!',
    data: shop,
  });
};

export const getShopInfoController = async (req, res) => {
    const { shopId } = req.params;
    const shopInfo = await getShopInfo(shopId);

    if (!shopInfo) {
      throw createHttpError(404, 'Shop not found');
    }

    res.json({
      status: 200,
      message: 'Shop info retrieved successfully!',
      data: shopInfo,
    });
  };
