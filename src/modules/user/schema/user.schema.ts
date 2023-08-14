import { Exclude } from "class-transformer";

export class UserSchema {
    id: number;
    fullName: string;
    userName: string;
    password: string;
    mobile: string;
    isAdmin: boolean;
    @Exclude()
    createdAt: Date;
    @Exclude()
    updatedAt: Date;
    @Exclude()
    deletedAt: Date;
}
  