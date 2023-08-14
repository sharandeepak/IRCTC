import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { BookingDTO } from './dto/booking.dto';
import { BookingSchema } from './schema/booking.schema';
import { BookingModel } from './model/booking.model';
import { BookingRepository } from './repository/booking.repository';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class BookingService extends BaseService<BookingDTO, BookingSchema, BookingModel, BookingRepository> {
    constructor(private bookingRepository: BookingRepository) {
        super(bookingRepository);
    };
    
    convertModelToSchema(bookingModel: BookingModel): BookingSchema {
        let bookingSchema : BookingSchema = plainToInstance(BookingSchema, bookingModel.toJSON() as BookingSchema);
        return bookingSchema;
    }
}
