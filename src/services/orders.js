import { OrdersCollection } from '../db/models/orders.js';
import { SORT_ORDER } from '../constants/index.js';

export const getAllOrders = async ({
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const ordersQuery = OrdersCollection.find();

  if (filter.name) {
    ordersQuery.where('name').equals(filter.name);
  }

  const orders = await ordersQuery.exec();

  const transformedOrders = orders.map((order) => ({
    ...order._doc,
    price: parseFloat(order.price),
    products: parseInt(order.products, 10),
  }));

  const sortedOrders = transformedOrders.sort((a, b) => {
    const orderMultiplier = sortOrder === SORT_ORDER.ASC ? 1 : -1;

    if (sortBy === '_id') {
      return (
        a[sortBy].toString().localeCompare(b[sortBy].toString()) *
        orderMultiplier
      );
    }

    if (typeof a[sortBy] === 'string' && typeof b[sortBy] === 'string') {
      return a[sortBy].localeCompare(b[sortBy]) * orderMultiplier;
    } else if (typeof a[sortBy] === 'number' && typeof b[sortBy] === 'number') {
      return (a[sortBy] - b[sortBy]) * orderMultiplier;
    }

    return 0;
  });

  return sortedOrders;
};
