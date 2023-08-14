import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingRepository } from './repository/booking.repository';
import { BookingController } from './controller/booking.controller';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  controllers: [BookingController],
  providers: [BookingService, BookingRepository],
  imports: [DatabaseModule]
})
export class BookingsModule {}
