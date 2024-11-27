import createHttpError from 'http-errors';
import { ShopCollection } from '../db/models/shop.js';


export const createShop = async (payload) => {
  const shop = await ShopCollection.findOne({ email: payload.email });
  if (shop) throw createHttpError(409, 'Email in use');


  return await ShopCollection.create({
    ...payload,
  });
};

export const getShopInfo = async (shopId) => {
    const shop = await UsersCollection.findById(shopId, 'name email');

    const latestCustomers = await CustomersCollection.find()
      .sort({ register_date: -1 })
      .limit(5)
      .select('name email spent country')
      .lean();

    const incomeExpenses = await IncomeExpensesCollection.find()
      .sort({ date: -1 })
      .lean();

    return {
      totalProducts,
      totalSuppliers,
      totalCustomers,
      latestCustomers,
      incomeExpenses,
      user,
    };
  };
