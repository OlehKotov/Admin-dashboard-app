import createHttpError from 'http-errors';
import { addProductToShop, createShop, deleteProductById, getProductById, getProductsByShopId, getShopInfo, updateProductById, updateShop } from '../services/shop.js';

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

  export const upsertShopController = async (req, res, next) => {
    const { shopId } = req.params;

    const result = await updateShop(shopId, req.body, {
        upsert: false,
      });

      if (!result) {
        next(createHttpError(404, 'Shop not found'));
        return;
      }

      const status = result.isNew ? 201 : 200;

      res.status(status).json({
        status,
        message: `Successfully upserted a shop!`,
        data: result.shop,
      });
  }

  export const addProductToShopController = async (req, res, next) => {
    const { shopId } = req.params;

    const product = await addProductToShop(shopId, req.body);

    res.status(201).json({
      status: 201,
      message: 'Successfully added product to the shop!',
      data: product,
    });
  };

  export const getProductsByShopIdController = async (req, res, next) => {
    const { shopId } = req.params;

    const products = await getProductsByShopId(shopId);

    res.status(200).json({
      status: 200,
      message: 'Successfully retrieved products!',
      data: products,
    });
  };

  export const getProductByIdController = async (req, res) => {
    const { shopId, productId } = req.params;
    const product = await getProductById(shopId, productId);

    if (!product) {
        throw createHttpError(404, 'Product not found');
      }

    res.json({
      status: 200,
      message: 'Successfully retrieved product!',
      data: product,
    });
  };

  export const updateProductController = async (req, res, next) => {
    const { shopId, productId } = req.params;
    const payload = req.body;

    const product = await updateProductById(shopId, productId, payload);

    if (!product) {
      throw createHttpError(404, 'Product not found');
    }

    res.status(200).json({
      status: 200,
      message: 'Successfully updated product!',
      data: product,
    });
  };

  export const deleteProductByIdController = async (req, res, next) => {
    const { shopId, productId } = req.params;

    const product = await deleteProductById(shopId, productId);

    if (!product) {
      next(createHttpError(404, 'Product not found'));
      return;
    }

    res.status(204).send();
  };
