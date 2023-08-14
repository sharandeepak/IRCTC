import { Controller } from "@nestjs/common";
import { BaseController } from "src/base/base.controller";
import { CoachDetailDTO } from "../dto/coach_detail.dto";
import { CoachDetailSchema } from "../schema/coach_detail.schema";
import { CoachDetailService } from "../service/coach_detail.service";

@Controller('coach_detail') 
export class CoachDetailController extends BaseController<CoachDetailDTO, CoachDetailSchema, CoachDetailService> {
    constructor(private coachDetailService: CoachDetailService) {
        super(coachDetailService);
    }
}