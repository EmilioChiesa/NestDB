// wine.schema.ts

import * as mongoose from 'mongoose';
import { ReviewSchema } from './review.schema'; // Importar el esquema de reseña actualizado
import { Review } from '../interfaces/wine.interface';

export const WineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reviews: [ReviewSchema] // Array de reseñas (usando el esquema de reseña actualizado)
});

export interface Wine extends mongoose.Document {
  name: string;
  reviews: Review[];
}
