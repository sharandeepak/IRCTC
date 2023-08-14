import { Module } from '@nestjs/common';
import { JourneyService } from './service/journey.service';
import { DatabaseModule } from 'src/core/database/database.module';
import { JourneyRepository } from './repository/journey.repository';
import { JourneyController } from './controller/journey.controller';

@Module({
  controllers: [JourneyController],
  providers: [JourneyService, JourneyRepository],
  imports: [DatabaseModule]
})
export class JourneyModule {}
