import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'train',
    underscored: true,
    paranoid: true,
    timestamps: true
})
export class TrainModel extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;
}