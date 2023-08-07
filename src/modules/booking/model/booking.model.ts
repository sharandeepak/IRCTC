import { Column, DataType, Table } from "sequelize-typescript";
import { bookingStatusEnum, bookingType } from "src/enum/enum";

@Table({tableName: 'booking'})
export class BookingModel {
    @Column({
        primaryKey: true,
        type: DataType.INTEGER
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
        field: 'user_id'
    })
    userId: number;

    @Column({
        type: DataType.INTEGER,
        field: 'trip_id'
    })
    tripId: number;

    @Column({
        type: DataType.INTEGER,
        field: 'from_station_id'
    })
    fromStationId: number;

    @Column({
        type: DataType.INTEGER,
        field: 'to_station_id'
    })
    toStationId: number;
    
    @Column({
        type: DataType.INTEGER,
        field: 'no_of_tickets'
    })
    noOfTickets: number;

    @Column({
        type: DataType.STRING
    })
    type: bookingType;

    @Column({
        type: DataType.INTEGER,
        field: 'payment_id'
    })
    paymentId: Number;

    @Column({
        type: DataType.STRING
    })
    status: bookingStatusEnum

}
