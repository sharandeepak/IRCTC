import {Column, DataType, Table } from "sequelize-typescript";

@Table({tableName: 'journey_stop'})
export class JourneyStopModel {
    @Column({
        primaryKey: true,
        type: DataType.NUMBER
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
        field: 'journey_id'
    })
    journeyId: number;

    @Column({
        type: DataType.INTEGER,
        field: 'station_id'
    })
    stationId: number;

    @Column({
        type: DataType.STRING,
        field: 'seq_no'
    })
    seqNo: number;
}