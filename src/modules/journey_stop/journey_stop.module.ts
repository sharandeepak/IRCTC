import { Module } from '@nestjs/common';
import { JourneyStopService } from './service/journey_stop.service';
import { JourneyStopRepository } from './repository/journey_stop.repository';
import { JourneyStopController } from './controller/journey_stop.controller';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  controllers: [JourneyStopController],
  providers: [JourneyStopService, JourneyStopRepository],
  imports: [DatabaseModule]
})
export class JourneyStopModule {}
