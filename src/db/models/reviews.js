import { model, Schema } from 'mongoose';

const reviewsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  reviewsSchema: {
    type: String,
    required: true,
  },
});

export const ReviewsCollection = model('reviews', reviewsSchema);
