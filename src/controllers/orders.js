
import { getAllOrders } from '../services/orders.js';
import { parseSortOrdersParams } from '../utils/parseOrdersSortParams.js';
// import createHttpError from 'http-errors';

export const getOrdersController = async (req, res, next) => {

    const { sortBy, sortOrder } = parseSortOrdersParams(req.query);
  try {
    const orders = await getAllOrders({
        sortBy,
        sortOrder,
      });

    res.json({
      status: 200,
      message: 'Successfully found orders!',
      data: orders,
    });
  } catch (error) {
    next(error);
  }
};
