import { Module } from '@nestjs/common';
import { CoachDetailService } from './coach_detail.service';

@Module({
  providers: [CoachDetailService]
})
export class CoachDetailModule {}
