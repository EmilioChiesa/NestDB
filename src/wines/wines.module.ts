import { Module } from '@nestjs/common';
import { WinesController } from './wines.controller';
import { WinesService } from './wines.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WineSchema } from './schemas/wine.schema';
import { ReviewSchema } from './schemas/review.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Wine', schema: WineSchema }
    ])
  ],
  controllers: [WinesController],
  providers: [WinesService]
})
export class WinesModule {/*...*/}
