import { Exclude } from "class-transformer";
import { trainTypeEnum } from "src/enum/enum";

export class JourneySchema {
    id: number;
    name: string;
    trainType: trainTypeEnum;
    @Exclude()
    createdAt: Date;
    @Exclude()
    updatedAt: Date;
    @Exclude()
    deletedAt: Date;
}