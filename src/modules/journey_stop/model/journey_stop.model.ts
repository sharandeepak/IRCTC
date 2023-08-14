import {Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { BookingModel } from "src/modules/booking/model/booking.model";
import { JourneyModel } from "src/modules/journey/model/journey.model";

@Table({
    tableName: 'journey_stop',
    underscored: true,
    paranoid: true,
    timestamps: true,
    indexes:[
        {
            unique: true,
            fields: ['journey_id', 'station_id'],
            where: {
                deleted_at: null
            }
        },
        {
            fields: ['station_id'],
            where: {
                deleted_at: null
            }
        },
        {
            fields: ['journey_id'],
            where: {
                deleted_at: null
            }
        }
    ]
})
export class JourneyStopModel extends Model {
    @Column({
        type: DataType.INTEGER,
        field: 'journey_id',
    })
    journeyId: number;

    @Column({
        type: DataType.INTEGER,
        field: 'station_id',
    })
    stationId: number;

    @Column({
        type: DataType.INTEGER,
        field: 'seq_no',
    })
    seqNo: number;

    @HasMany(()=>BookingModel, {
        foreignKey: {name:'fromStopId', allowNull: false},
        as:'booking-fromStopId-JourneyStopIdAlias',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    booking: BookingModel;

    @HasMany(()=>BookingModel, {
        foreignKey: {name:'toStopId', allowNull: false},
        as:'booking-toStopId-JourneyStopIdAlias',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    booking2: BookingModel;
}