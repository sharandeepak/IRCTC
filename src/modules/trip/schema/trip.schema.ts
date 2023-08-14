import { trainTripStatusEnum } from "src/enum/enum";

export class TripSchema {
    jouneyId: number;
    trainId: number;
    status: trainTripStatusEnum;
}