import { AutoIncrement, Column, DataType } from "sequelize-typescript";
import { trainTypeEnum } from "src/enum/enum";

export class JourneyModel {
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
        type: DataType.STRING,
        field: 'train_type'
    })
    trainType: trainTypeEnum;
}