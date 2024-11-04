import { OrdersCollection } from '../db/models/orders.js';
import { SORT_ORDER } from '../constants/index.js';

export const getAllOrders = async ({
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
}) => {
  const ordersQuery = OrdersCollection.find();
  const ordersCount = await OrdersCollection.find()
    .merge(ordersQuery)
    .countDocuments();

  const orders = await ordersQuery.sort({ [sortBy]: sortOrder }).exec();
  return orders;
};
