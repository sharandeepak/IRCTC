import { Exclude } from "class-transformer";
import { coachTypeEnum } from "src/enum/enum";

export class CoachDetailSchema {
    tripId: number;
    coachType: coachTypeEnum;
    coachCapacity: number;
    coachPrice: number;
    @Exclude()
    createdAt: Date;
    @Exclude()
    updatedAt: Date;
    @Exclude()
    deletedAt: Date;
}