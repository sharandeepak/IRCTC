import { Module } from '@nestjs/common';
import { StationService } from './station.service';
import { DatabaseModule } from 'src/core/database/database.module';
import { StationRepository } from './repository/station.repository';
import { StationController } from './controller/station.controller';

@Module({
  controllers: [StationController],
  providers: [StationService, StationRepository],
  imports: [DatabaseModule]
})
export class StationModule {}
