import { Document } from 'mongoose';

export interface Review {
  username: string;
  isPremium: boolean;
  rating: number;
  comment: string;
  date: Date;
}

export interface Wine extends Document {
  name: string;
  reviews: Review[];
}