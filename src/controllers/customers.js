import { getAllCustomers, getCustomerById } from '../services/customers.js';
import createHttpError from 'http-errors';

export const getCustomersController = async (req, res, next) => {
  try {
    const customers = await getAllCustomers();

    res.json({
      status: 200,
      message: 'Successfully found customers!',
      data: customers,
    });
  } catch (error) {
    next(error);
  }
};

export const getCustomerByIdController = async (req, res, next) => {
  const { customerId } = req.params;
  const customer = await getCustomerById(customerId);

  if (!customer) {
    throw createHttpError(404, 'Customer not found');
  }

  res.json({
    status: 200,
    message: `Successfully found customer with id ${customerId}!`,
    data: customer,
  });
};
