import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { TrainModel } from "src/modules/train/model/train.model";

@Table({
    tableName: 'trip',
    underscored: true,
    paranoid: true,
    timestamps: true
})
export class TripModel extends Model<TripModel> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
        field: 'journey_id',
        allowNull: false
    })
    journeyId: number;

    @HasMany(()=>TrainModel, {
        foreignKey: {name:'id', allowNull: false},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    @Column({
        type: DataType.NUMBER,
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
}