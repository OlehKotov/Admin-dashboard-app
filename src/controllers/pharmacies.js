import { getPharmacies } from '../services/pharmacies.js';
import createHttpError from 'http-errors';

export const getPharmaciesController = async (req, res, next) => {

  try {
    const pharmacies = await getPharmacies();

    res.json({
      status: 200,
      message: 'Successfully found pharmacies!',
      data: pharmacies,
    });
  } catch (error) {
    next(error);
  }
};
