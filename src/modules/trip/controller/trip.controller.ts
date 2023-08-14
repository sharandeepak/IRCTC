import { Controller } from "@nestjs/common";
import { TripDTO } from "../dto/trip.dto";
import { TripSchema } from "../schema/trip.schema";
import { TripService } from "../service/trip.service";
import { BaseController } from "src/base/base.controller";

@Controller('trip') 
export class TripController extends BaseController<TripDTO, TripSchema, TripService> {
    constructor(private tripService: TripService) {
        super(tripService);
    }
}