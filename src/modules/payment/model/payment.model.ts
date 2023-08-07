import { Column, DataType, Table } from "sequelize-typescript";
import { paymentModeEnums } from "src/enum/enum";

@Table({tableName: 'payment'})
export class PaymentModel {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    mode: paymentModeEnums;

    @Column({
        type: DataType.INTEGER
    })
    amount: number;
}