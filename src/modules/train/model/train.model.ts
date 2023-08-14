import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { TripModel } from "src/modules/trip/model/trip.model";

@Table({
    tableName: 'train',
    underscored: true,
    paranoid: true,
    timestamps: true
})
export class TrainModel extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    name: string;

    @HasMany(()=>TripModel, {
        foreignKey: {name:'trainId', allowNull: false},
        as:'trip-trainIdAlias',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    trip: TripModel
    
}