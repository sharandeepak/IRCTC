import { Module } from '@nestjs/common';
import { JourneyStopService } from './journey_stop.service';

@Module({
  providers: [JourneyStopService]
})
export class JourneyStopModule {}
