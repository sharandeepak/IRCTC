import { Column, DataType, Model, Table } from "sequelize-typescript";
import { coachTypeEnum } from "src/enum/enum";

@Table({
    tableName: "coach_detail",
    underscored: true,
    paranoid: true,
    timestamps: true,
    indexes:[
        {
            unique: true,
            fields: ['trip_id', 'coach_type'],
            where: {
                deleted_at: null
            }
        },
        {
            fields: ['trip_id'],
            where: {
                deleted_at: null
            }
        },
        {
            fields: ['coach_capacity'],
            where: {
                deleted_at: null
            }
        }
]
})
export class CoachDetailModel extends Model {
    @Column({
        type: DataType.INTEGER,
        field: 'trip_id', 
        allowNull: false,
    })
    tripId: number;

    @Column({
        type: DataType.STRING,
        field: 'coach_type',
        allowNull: false
    })
    coachType: coachTypeEnum;

    @Column({
        type: DataType.INTEGER,
        field: 'coach_capacity',
        allowNull: false
    })
    coachCapacity: number;

    @Column({
        type: DataType.INTEGER,
        field: 'coach_price',
        allowNull: false
    })
    coachPrice: number;
}