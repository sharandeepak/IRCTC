import { Controller } from "@nestjs/common";
import { JourneyDTO } from "../dto/journey.dto";
import { JourneySchema } from "../schema/journey.schema";
import { JourneyService } from "../service/journey.service";
import { BaseController } from "src/base/base.controller";

@Controller('journey') 
export class JourneyController extends BaseController<JourneyDTO, JourneySchema, JourneyService> {
    constructor(private journeyService: JourneyService) {
        super(journeyService);
    }
}