import { bookingStatusEnum, bookingType } from "src/enum/enum";

export class BookingSchema {
    userId: number;
    tripId: number;
    fromStopId: number;
    toStopId: number;
    coachType: string;
    noOfTickets: number;
    type: bookingType;
    paymentId: number;
    status: bookingStatusEnum
}
