import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wine } from './interfaces/wine.interface';
import { CreateWineDto } from './dto/create-wine.dto';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class WinesService {
  constructor(@InjectModel('Wine') private readonly wineModel: Model<Wine>) {}

  async findAll(): Promise<Wine[]> {
    return this.wineModel.find().exec();
  }

  async findOne(id: string): Promise<Wine> {
    return this.wineModel.findById(id).exec();
  }

  async create(createWineDto: CreateWineDto): Promise<Wine> {
    const createdWine = new this.wineModel(createWineDto);
    return createdWine.save();
  }

  async addReview(wineId: string, createReviewDto: CreateReviewDto): Promise<Wine> {
    const wine = await this.wineModel.findById(wineId);
    if (!wine) {
      throw new Error('Wine not found');
    }
    const review = {
      ...createReviewDto,
      date: createReviewDto.date ? createReviewDto.date : new Date()
    };
    wine.reviews.push(review);
    // Guardar el documento actualizado en la base de datos
    await wine.save();
    return wine;
  }
}
