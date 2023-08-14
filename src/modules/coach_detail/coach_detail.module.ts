import { Module } from '@nestjs/common';
import { CoachDetailService } from './service/coach_detail.service';
import { CoachDetailRepository } from './repository/coach_detail.repository';
import { CoachDetailController } from './controller/coach_detail.controller';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  controllers: [CoachDetailController],
  providers: [CoachDetailService, CoachDetailRepository],
  imports: [DatabaseModule]
})
export class CoachDetailModule {}
