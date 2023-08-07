import { Injectable } from "@nestjs/common";
import { Model } from "sequelize";

@Injectable()
export class TripRepository extends Model<TripRepository> {
    
}