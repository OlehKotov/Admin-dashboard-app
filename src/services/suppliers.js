import { SuppliersCollection } from '../db/models/suppliers.js';

export const getAllSuppliers = async () => {
  const suppliers = await SuppliersCollection.find();
  return suppliers;
};

export const createSupplier = async (payload) => {
  const supplier = await SuppliersCollection.create(payload);
  return supplier;
};

export const updateSupplier = async (supplierId, payload, options = {}) => {
    const rawResult = await SuppliersCollection.findOneAndUpdate(
        { _id: supplierId },
        payload,
        {
          new: true,
          includeResultMetadata: true,
          ...options,
        },
      );

      if (!rawResult || !rawResult.value) return null;

      return {
        supplier: rawResult.value,
        isNew: Boolean(rawResult?.lastErrorObject?.upserted),
      };
};