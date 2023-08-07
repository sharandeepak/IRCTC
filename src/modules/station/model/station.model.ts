import { AutoIncrement, Column, DataType, Table } from "sequelize-typescript";

@Table({tableName: 'station'})
export class StationModel {
    @Column({
        primaryKey: true,
        type: DataType.NUMBER
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    name: string;

    @Column({
        type: DataType.STRING
    })
    city: string;

    @Column({
        type: DataType.STRING
    })
    state: string;
}