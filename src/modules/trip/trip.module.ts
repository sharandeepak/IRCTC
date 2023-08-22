import { Module } from '@nestjs/common';
import { TripService } from './service/trip.service';
import { TripController } from './controller/trip.controller';
import { TripRepository } from './repository/trip.repository';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
    controllers: [TripController],
    providers: [TripService, TripRepository],
    imports: [DatabaseModule],
    exports: [TripService]
})
export class TripModule {
}
