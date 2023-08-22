import { Inject, Injectable } from '@nestjs/common';
import { Model, Op } from 'sequelize';
import { BaseRepository } from 'src/base/base.repository';
import { TripDTO } from '../dto/trip.dto';
import { TripModel } from '../model/trip.model';
import { SEQUELIZE } from 'src/core/constants';
import { coachTypeEnum } from 'src/enum/enum';
import { JourneyStopModel } from 'src/modules/journey_stop/model/journey_stop.model';
import { CoachDetailModel } from 'src/modules/coach_detail/model/coach_detail.model';
import sequelize from 'sequelize';
import { BookingDTO } from 'src/modules/booking/dto/booking.dto';
import { JourneyModel } from 'src/modules/journey/model/journey.model';

@Injectable()
export class TripRepository extends BaseRepository<TripDTO, TripModel> {
    constructor(@Inject(SEQUELIZE) database) {
        super(database, 'TripModel');
    }

    // async findAvailableTrips(bookingDTO: BookingDTO): Promise<number[]> {
    //     const trips = await this.database['TripModel'].findAll({
    //         attributes: ['id'],
    //         include: [
    //             {
    //                 model: JourneyModel,
    //                 attributes: [],
    //                 include: [
    //                     {
    //                         as: 'journeyStop-journeyIdAlias',
    //                         model: JourneyStopModel,
    //                         attributes: [],
    //                         where: {
    //                             station_id: 2
    //                         }
    //                     },
    //                     {
    //                         as: 'journeyStop-journeyIdAlias',
    //                         model: JourneyStopModel,
    //                         attributes: [],
    //                         where: {
    //                             station_id: 3,
    //                             seq_no: { [Op.gt]: sequelize.col('journeyStops1.seq_no') } // Use 'gt' for greater than
    //                         }
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: CoachDetailModel,
    //                 attributes: [],
    //                 where: {
    //                     coach_type: 'AC',
    //                     coach_capacity: { [Op.gt]: 1 }
    //                 }
    //             }
    //         ],
    //         raw: true // Return raw data
    //     });
    //     // const trips = this.database['TripModel'].query("");
    //     const idList: number[] = trips.map((trip) => trip.id);
    //     return idList;
    // }
}
