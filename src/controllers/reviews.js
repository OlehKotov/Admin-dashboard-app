import { getReviews } from '../services/reviews.js';
import createHttpError from 'http-errors';


export const getReviewsController = async (req, res, next) => {

  try {
    const reviews = await getReviews();

    res.json({
      status: 200,
      message: 'Successfully found customer reviews!',
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
};
