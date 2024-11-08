import { CustomersCollection } from '../db/models/customers.js';

export const getAllCustomers = async ({ filter = {} }) => {

  const customersQuery = CustomersCollection.find();

  if (filter.name) {
    customersQuery.where('name').equals(filter.name);
  }

  const customers = await customersQuery.exec();

  return customers;
};

export const getCustomerById = async (customerId) => {
  const customer = await CustomersCollection.findById(customerId);
  return customer;
};
