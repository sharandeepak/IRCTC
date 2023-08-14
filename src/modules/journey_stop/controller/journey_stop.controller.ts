import { BaseController } from "src/base/base.controller";
import { JourneyStopDTO } from "../dto/journey_stop.dto";
import { JourneyStopSchema } from "../schema/journey_stop.schema";
import { JourneyStopService } from "../service/journey_stop.service";
import { Controller } from "@nestjs/common";

@Controller('journey_stop') 
export class JourneyStopController extends BaseController<JourneyStopDTO, JourneyStopSchema, JourneyStopService> {
    constructor(private journeyStopService: JourneyStopService) {
        super(journeyStopService);
    }
}