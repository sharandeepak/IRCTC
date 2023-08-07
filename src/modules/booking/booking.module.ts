import { Module } from '@nestjs/common';
import { BookingsService } from './booking.service';

@Module({
  providers: [BookingsService]
})
export class BookingsModule {}
