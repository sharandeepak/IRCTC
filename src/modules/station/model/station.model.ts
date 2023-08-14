import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { JourneyStopModel } from "src/modules/journey_stop/model/journey_stop.model";

@Table({
    tableName: 'station',
    underscored: true,
    paranoid: true,
    timestamps: true,
    indexes:[
        {
            unique: true,
            fields: ['name', 'city'],
            where: {
                deleted_at: null
            }
        }
    ]
})
export class StationModel extends Model<StationModel> {
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    city: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    state: string;

    @HasMany(()=> JourneyStopModel, {
        foreignKey: {name:'stationId', allowNull: false},
        as:'journeyStop-stationIdAlias',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    journeyStopModel: JourneyStopModel;
}