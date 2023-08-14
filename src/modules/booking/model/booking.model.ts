import { Column, DataType, Model, Table } from "sequelize-typescript";
import { bookingStatusEnum, bookingType } from "src/enum/enum";

@Table({
    tableName: 'booking',
    underscored: true,
    paranoid: true,
    timestamps: true
})
export class BookingModel extends Model {
    @Column({
        type: DataType.INTEGER,
        field: 'user_id',
        allowNull: false
    })
    userId: number;

    @Column({
        type: DataType.INTEGER,
        field: 'trip_id',
        allowNull: false
    })
    tripId: number;

    @Column({
        type: DataType.INTEGER,
        field: 'from_stop_id',
        allowNull: false
    })
    fromStopId: number;

    @Column({
        type: DataType.INTEGER,
        field: 'to_stop_id',
        allowNull: false
    })
    toStopId: number;
    
    @Column({
        type: DataType.INTEGER,
        field: 'no_of_tickets',
        allowNull: false
    })
    noOfTickets: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    type: bookingType;

    @Column({
        type: DataType.INTEGER,
        field: 'payment_id',
        allowNull: false
    })
    paymentId: Number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    status: bookingStatusEnum;
}
