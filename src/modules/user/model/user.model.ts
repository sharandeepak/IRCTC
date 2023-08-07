import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'user',
    underscored: true,
    paranoid: true,
    timestamps: true,
    indexes: [{fields: ['id','is_admin'], unique: true, where:{deleted_at: null}}]
})
export class UserModel extends Model<UserModel> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

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
}