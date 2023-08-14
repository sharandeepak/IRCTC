import { Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import { paymentModeEnums } from "src/enum/enum";
import { BookingModel } from "src/modules/booking/model/booking.model";

@Table({
    tableName: 'payment',
    underscored: true,
    paranoid: true,
    timestamps: true
})
export class PaymentModel extends Model<PaymentModel> {
    @Column({
        type: DataType.STRING, 
        allowNull: false
    })
    mode: paymentModeEnums;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    amount: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    currency: number;

    @HasOne(()=>BookingModel, {
        foreignKey: {name:'paymentId', allowNull: false},
        as:'booking-paymentIdAlias',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    booking: BookingModel;
}