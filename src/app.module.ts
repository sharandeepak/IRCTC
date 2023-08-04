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
import { JourneyStopService } from './modules/journey_stop/journey_stop.service';
import { JourneyStopModule } from './modules/journey_stop/journey_stop.module';
import { PaymentModule } from './modules/payment/payment.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule
  ],
})
// BookingsModule,
//     TrainModule,
//     TripModule,
//     CoachDetailModule,
//     StationModule,
//     JourneyModule,
//     JourneyStopModule,
//     PaymentModule
export class AppModule {}
