import {Column, DataType, Table } from "sequelize-typescript";
import { trainTypeEnum } from "src/enum/enum";

@Table({tableName: 'journey'})
export class JouneyModel {
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
    trainType: trainTypeEnum;
}