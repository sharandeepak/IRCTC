import { coachTypeEnum } from "src/enum/enum";

export class CoachDetailDTO {
    tripId: number;
    coachType: coachTypeEnum;
    coachCapacity: number;
    coachPrice: number;
}