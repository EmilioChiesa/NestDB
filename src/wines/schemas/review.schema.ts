import { Schema } from 'mongoose';

export const ReviewSchema = new Schema({
  username: { type: String, required: true },
  isPremium: { type: Boolean, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now }
});
