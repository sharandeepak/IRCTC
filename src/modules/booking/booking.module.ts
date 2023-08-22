import { Module, forwardRef } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingRepository } from './repository/booking.repository';
import { BookingController } from './controller/booking.controller';
import { DatabaseModule } from 'src/core/database/database.module';
import { TripModule } from '../trip/trip.module';
import { CacheModule } from 'src/core/cache/cache.module';
import { MessageQueueModule } from 'src/core/message_queue/message_queue.module';

@Module({
    controllers: [BookingController],
    providers: [BookingService, BookingRepository],
    imports: [DatabaseModule, TripModule, CacheModule, MessageQueueModule],
    exports: [BookingService]
})
export class BookingsModule {}
