import { Module } from '@nestjs/common';
import { TrainService } from './service/train.service';
import { TrainController } from './controller/train.controller';
import { TrainRepository } from './repository/train.repository';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  controllers: [TrainController],
  providers: [TrainService, TrainRepository],
  imports: [DatabaseModule]
})
export class TrainModule {}
