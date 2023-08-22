import { Module } from '@nestjs/common';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/user/user.module';
import { BookingsModule } from './modules/booking/booking.module';
import { TrainModule } from './modules/train/train.module';
import { TripModule } from './modules/trip/trip.module';
import { CoachDetailModule } from './modules/coach_detail/coach_detail.module';
import { StationModule } from './modules/station/station.module';
import { JourneyModule } from './modules/journey/journey.module';
import { JourneyStopModule } from './modules/journey_stop/journey_stop.module';
import { PaymentModule } from './modules/payment/payment.module';
import { CacheModule } from './core/cache/cache.module';
import { AppService } from './app.service';
import { MessageQueueModule } from './core/message_queue/message_queue.module';
import { SearchModule } from './core/elasticsearch/search.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventEmitterModule2 } from './core/event_emitter/event_emitter.module';
import { NotificationModule } from './modules/notification/notification.module';

@Module({
    controllers: [],
    providers: [AppService],
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        EventEmitterModule.forRoot(),
        DatabaseModule,
        UsersModule,
        TrainModule,
        StationModule,
        BookingsModule,
        TripModule,
        CoachDetailModule,
        JourneyModule,
        JourneyStopModule,
        PaymentModule,
        CacheModule,
        MessageQueueModule,
        SearchModule,
        NotificationModule,
        EventEmitterModule2
    ]
})
export class AppModule {}
