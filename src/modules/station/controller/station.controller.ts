import { BaseController } from "src/base/base.controller";
import { StationDTO } from "../dto/station.dto";
import { StationSchema } from "../schema/station.schema";
import { StationService } from "../station.service";
import { Controller } from "@nestjs/common";

@Controller('station') 
export class StationController extends BaseController<StationDTO, StationSchema, StationService> {
    constructor(private stationService: StationService) {
        super(stationService);
    }
}