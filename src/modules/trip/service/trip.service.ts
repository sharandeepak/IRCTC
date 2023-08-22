import { Injectable } from '@nestjs/common';
import { TripDTO } from '../dto/trip.dto';
import { TripSchema } from '../schema/trip.schema';
import { TripModel } from '../model/trip.model';
import { TripRepository } from '../repository/trip.repository';
import { BaseService } from 'src/base/base.service';
import { plainToInstance } from 'class-transformer';
import { BookingDTO } from 'src/modules/booking/dto/booking.dto';

@Injectable()
export class TripService extends BaseService<TripDTO, TripSchema, TripModel, TripRepository> {
    constructor(private tripRepository: TripRepository) {
        super(tripRepository);
    };
    
    convertModelToSchema(tripModel: TripModel): TripSchema {
        //there is a slight modification in the toJson as ---
        let tripSchema : TripSchema = plainToInstance(TripSchema, tripModel.toJSON());
        return tripSchema;
    }

    // async findAvailableTrips(bookingDTO: BookingDTO): Promise<number []> {
    //     const availableTrips: number[] = await this.tripRepository.findAvailableTrips(bookingDTO);
    //     return availableTrips;
    // }
}