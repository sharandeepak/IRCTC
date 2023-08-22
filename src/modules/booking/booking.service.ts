import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { BookingDTO } from './dto/booking.dto';
import { BookingSchema } from './schema/booking.schema';
import { BookingModel } from './model/booking.model';
import { BookingRepository } from './repository/booking.repository';
import { plainToInstance } from 'class-transformer';
import { CacheService } from 'src/core/cache/cache.service';
import { EXPIRY_TIME_IN_SEC, MAX_NO_OF_TICKETS_PER_USER_PER_DAY } from 'src/core/constants';
import { TripService } from '../trip/service/trip.service';
import Redis from 'ioredis';
import { InjectRedis } from '@nestjs-modules/ioredis';
import { createClient } from 'redis';
import { BullMqService } from 'src/core/message_queue/message_queue.service';

@Injectable()
export class BookingService extends BaseService<BookingDTO, BookingSchema, BookingModel, BookingRepository> {
    constructor(private bookingRepository: BookingRepository, private cacheService: CacheService,private tripService: TripService, private readonly bullMqServices: BullMqService) {
        super(bookingRepository);
    };

    convertModelToSchema(bookingModel: BookingModel): BookingSchema {
        let bookingSchema : BookingSchema = plainToInstance(BookingSchema, bookingModel.toJSON() as BookingSchema);
        return bookingSchema;
    }
    
    async create(dto: BookingDTO): Promise<BookingSchema> {
        try {
            let perDayLimit = await this.getPerDayLimit(dto.userId.toString());
            if (dto.noOfTickets <= perDayLimit) {
                let model: BookingModel = await this.bookingRepository.create(dto);
                let schema: BookingSchema = this.convertModelToSchema(model);
                this.cacheService.decrBy('per-day-limit-of#' + dto.userId, dto.noOfTickets);                
                await this.bullMqServices.addJob({message: "Your Tickets has been booked successfully !!"});
                return schema; 
            } else {
                throw new Error(
                    'Booking limit for today exceeded !! Please Try again after 24 Hours'
                );
            }
        } catch (e) {
            throw new Error(e.toString());
        } 
    }

    async getPerDayLimit(userId: string): Promise<number> { 
        try {
            const limit: string = await this.cacheService.get("per-day-limit-of#"+userId);
            if (!limit) { 
                await this.cacheService.setWithExpiry(
                    'per-day-limit-of#' + userId,
                    MAX_NO_OF_TICKETS_PER_USER_PER_DAY.toString(),
                    EXPIRY_TIME_IN_SEC
                );
                return MAX_NO_OF_TICKETS_PER_USER_PER_DAY;
            }
            const perDayLimit: number = Number(limit);
            return perDayLimit;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    // async validateBooking(dto: BookingDTO): Promise<boolean> {
    //     const availableTrips: number[] = await this.tripService.findAvailableTrips(dto);
    //     return availableTrips.includes(dto.tripId);
    // }
}
