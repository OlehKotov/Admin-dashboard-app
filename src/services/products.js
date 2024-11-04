import { ProductsCollection } from '../db/models/products.js';

export const getAllProducts = async ({
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
}) => {
  const productsQuery = ProductsCollection.find();
  const productsCount = await ProductsCollection.find()
    .merge(productsQuery)
    .countDocuments();
  const products = await productsQuery.sort({ [sortBy]: sortOrder }).exec();
  return products;
};

export const createProduct = async (payload) => {
  const product = await ProductsCollection.create(payload);
  return product;
};

export const deleteProduct = async (productId) => {
  const product = await ProductsCollection.findOneAndDelete({
    _id: productId,
  });

  return product;
};

export const updateProduct = async (productId, payload, options = {}) => {
  const rawResult = await ProductsCollection.findOneAndUpdate(
    { _id: productId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    product: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};