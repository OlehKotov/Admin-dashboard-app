import { createShop } from '../services/shop.js';

export const createShopController = async (req, res) => {
  const shop = await createShop(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a shop!',
    data: shop,
  });
};
