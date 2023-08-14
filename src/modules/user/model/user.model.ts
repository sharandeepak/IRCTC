import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { BookingModel } from "src/modules/booking/model/booking.model";

@Table({
    tableName: 'user',
    underscored: true,
    paranoid: true,
    timestamps: true,
    indexes: [
        {
            fields: ['id','is_admin'], 
            unique: true, 
            where: {
                deleted_at: null
            }
        }
    ]
})
export class UserModel extends Model<UserModel> {
    @Column({
        type: DataType.STRING,
        field: 'full_name',
        allowNull: false
    })
    fullName: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
        field: 'user_name'
        
    })
    userName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    mobile: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        field: 'is_admin'
    })
    isAdmin: boolean;

    @HasMany(()=>BookingModel, {
        foreignKey: {name:'userId', allowNull: false},
        as:'bookingModel-userIdAlias',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    bookingModel: BookingModel
}