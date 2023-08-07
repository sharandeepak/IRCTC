import { Exclude } from "class-transformer";

export class TrainSchema {
    id: number;
    name: string;
    @Exclude()
    updatedAt: Date;
    @Exclude()
    createdAt: Date;
    @Exclude()
    deletedAt: Date;
}