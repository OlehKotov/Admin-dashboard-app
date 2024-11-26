import { getNearestFarmacies } from '../services/nearest.js';
import createHttpError from 'http-errors';

export const getNearestFarmaciesController = async (req, res, next) => {

  try {
    const nearestFarmacies = await getNearestFarmacies();

    res.json({
      status: 200,
      message: 'Successfully found neares-farmacies!',
      data: nearestFarmacies,
    });
  } catch (error) {
    next(error);
  }
};
