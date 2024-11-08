import { getAllOrders } from '../services/orders.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';
import { parseSortOrdersParams } from '../utils/parseOrdersSortParams.js';

export const getOrdersController = async (req, res, next) => {
  const { sortBy, sortOrder } = parseSortOrdersParams(req.query);
  const filter = parseFilterParams(req.query);

  try {
    const orders = await getAllOrders({
      sortBy,
      sortOrder,
      filter,
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
