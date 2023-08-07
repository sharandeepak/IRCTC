import { Module } from '@nestjs/common';
import { StationService } from './station.service';

@Module({
  providers: [StationService]
})
export class StationModule {}
