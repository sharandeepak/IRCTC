import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { BookingModel } from "src/modules/booking/model/booking.model";
import { CoachDetailModel } from "src/modules/coach_detail/model/coach_detail.model";

@Table({
    tableName: 'trip',
    underscored: true,
    paranoid: true,
    timestamps: true,
    indexes:[{
        unique: true,
        fields: ['journey_id'],
        where: {
            deleted_at: null
        }}]
})
export class TripModel extends Model {
    @Column({
        type: DataType.INTEGER,
        field: 'journey_id',
        allowNull: false
    })
    journeyId: number;

    @Column({
        type: DataType.INTEGER,
        field: 'train_id',
        allowNull: false
    })
    trainId: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue: ""
    })
    status: string;

    @HasMany(()=>CoachDetailModel, {
        foreignKey: {name:'tripId', allowNull: false},
        as:'coachDetail-tripIdAlias',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    coachDetail: CoachDetailModel; 

    @HasMany(()=>BookingModel, {
        foreignKey: {name:'tripId', allowNull: false},
        as:'booking-tripIdAlias',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    booking: BookingModel;
}