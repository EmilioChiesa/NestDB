import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { WinesService } from './wines.service';
import { Wine } from './interfaces/wine.interface';
import { CreateWineDto } from './dto/create-wine.dto';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('wines')
export class WinesController {
  constructor(private readonly winesService: WinesService) {}

  @Get()
  async findAll(): Promise<Wine[]> {
    return this.winesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Wine> {
    return this.winesService.findOne(id);
  }

  @Post()
  async create(@Body() createWineDto: CreateWineDto): Promise<Wine> {
    return this.winesService.create(createWineDto);
  }

  @Post(':id/reviews')
  async addReview(
    @Param('id') id: string,
    @Body() createReviewDto: CreateReviewDto,
  ): Promise<Wine> {
    return this.winesService.addReview(id, createReviewDto);
  }
}
