import { Exclude } from "class-transformer";

export class StationSchema {
    name: string;
    city: string;
    state: string;
    @Exclude()
    createdAt: Date;
    @Exclude()
    updatedAt: Date;
    @Exclude()
    deletedAt: Date;
}