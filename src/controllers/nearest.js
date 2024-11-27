import { getNearest } from '../services/nearest.js';
// import createHttpError from 'http-errors';

export const getNearestController = async (req, res, next) => {

  try {
    const nearest = await getNearest();

    res.json({
      status: 200,
      message: 'Successfully found neares-farmacies!',
      data: nearest,
    });
  } catch (error) {
    next(error);
  }
};
