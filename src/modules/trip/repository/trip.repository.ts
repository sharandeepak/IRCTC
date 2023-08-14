import { Inject, Injectable } from "@nestjs/common";
import { Model } from "sequelize";
import { BaseRepository } from "src/base/base.repository";
import { TripDTO } from "../dto/trip.dto";
import { TripModel } from "../model/trip.model";
import { SEQUELIZE } from "src/core/constants";

@Injectable()
export class TripRepository extends BaseRepository<TripDTO, TripModel> {
    constructor(@Inject(SEQUELIZE) database) {
        console.log('Typeof database ---', typeof(database));
        super(database, 'TripModel');
    }
}