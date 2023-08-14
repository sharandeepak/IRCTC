import {Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { trainTypeEnum } from "src/enum/enum";
import { JourneyStopModel } from "src/modules/journey_stop/model/journey_stop.model";
import { TripModel } from "src/modules/trip/model/trip.model";

@Table({
    tableName: 'journey',
    underscored: true,
    paranoid: true,
    timestamps: true
})
export class JourneyModel extends Model<JourneyModel> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    name: string;

    @Column({
        type: DataType.STRING,
        field: 'train_type',
        allowNull: false
    })
    trainType: trainTypeEnum;

    @HasMany(()=>TripModel, {
        foreignKey: {name:'journeyId', allowNull: false},
        as:'trip-journeyIdAlias',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    trip: TripModel

    @HasMany(()=>JourneyStopModel, {
        foreignKey: {name:'journeyId', allowNull: false},
        as:'journeyStop-journeyIdAlias',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    journeyStop: JourneyStopModel
}