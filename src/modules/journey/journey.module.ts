import { Module } from '@nestjs/common';
import { JourneyService } from './journey.service';

@Module({
  providers: [JourneyService]
})
export class JourneyModule {}
