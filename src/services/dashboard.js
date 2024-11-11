import { ProductsCollection } from '../db/models/products.js';
import { SuppliersCollection } from '../db/models/suppliers.js';
import { CustomersCollection } from '../db/models/customers.js';
import { IncomeExpensesCollection } from '../db/models/incomeExpenses.js';
import { UsersCollection } from '../db/models/user.js';

export const getDashboardInfo = async (userId) => {
  const totalProducts = await ProductsCollection.countDocuments();
  const totalSuppliers = await SuppliersCollection.countDocuments();
  const totalCustomers = await CustomersCollection.countDocuments();
  const user = await UsersCollection.findById(userId, 'name email');

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
