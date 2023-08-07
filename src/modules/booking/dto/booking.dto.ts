import { bookingStatusEnum, bookingType } from "src/enum/enum";

export class BookingDTO {
    userId: number;
    tripId: number;
    fromStationId: number;
    toStationId: number;
    noOfTickets: number;
    type: bookingType;
    paymentId: number;
    status: bookingStatusEnum
}
