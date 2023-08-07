import { Column, DataType, Table } from "sequelize-typescript";
import { coachTypeEnum } from "src/enum/enum";

@Table({tableName: "coach_detail"})
export class CoachDetailModel {
    @Column({
        type: DataType.NUMBER,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.NUMBER,
        field: 'trip_id'
    })
    tripId: number;

    @Column({
        type: DataType.STRING,
        field: 'coach_type'
    })
    coachType: coachTypeEnum;

    @Column({
        type: DataType.NUMBER,
        field: 'coach_capacity'
    })
    coachCapacity: number;

    @Column({
        type: DataType.NUMBER,
        field: 'coach_price'
    })
    coachPrice: number;
}