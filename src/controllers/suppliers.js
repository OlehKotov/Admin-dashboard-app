import { createSupplier, getAllSuppliers, updateSupplier } from "../services/suppliers.js";
import createHttpError from 'http-errors';
import { parseFilterParams } from "../utils/parseFilterParams.js";



export const getSuppliersController = async (req, res, next) => {
    const filter = parseFilterParams(req.query);
  try {
    const suppliers = await getAllSuppliers({
        filter,
      });

    res.json({
      status: 200,
      message: 'Successfully found suppliers!',
      data: suppliers,
    });
  } catch (error) {
    next(error);
  }
};

export const createSupplierController = async (req, res) => {
    const supplier = await createSupplier(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a supplier!`,
    data: supplier,
  });
  };

  export const upsertSupplierController = async (req, res, next) => {
    const { supplierId } = req.params;

    const result = await updateSupplier(supplierId, req.body, {
        upsert: false,
      });

      if (!result) {
        next(createHttpError(404, 'Supplier not found'));
        return;
      }

      const status = result.isNew ? 201 : 200;

      res.status(status).json({
        status,
        message: `Successfully upserted a supplier!`,
        data: result.supplier,
      });
  }
