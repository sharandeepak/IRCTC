import { Module } from '@nestjs/common';
import { TripService } from './trip.service';

@Module({
    providers: [TripService],
    controllers: []
})
export class TripModule {
}
