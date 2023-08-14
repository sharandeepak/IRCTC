import { Controller } from "@nestjs/common";
import { BaseController } from "src/base/base.controller";
import { BookingDTO } from "../dto/booking.dto";
import { BookingSchema } from "../schema/booking.schema";
import { BookingService } from "../booking.service";

@Controller('booking') 
export class BookingController extends BaseController<BookingDTO, BookingSchema, BookingService> {
    constructor(private bookingService: BookingService) {
        super(bookingService);
    }
}