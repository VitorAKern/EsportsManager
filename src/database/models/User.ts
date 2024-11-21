import { DataTypes, Sequelize, UUIDV4 } from 'sequelize';
import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript'

@Table({
    tableName: "User",
    timestamps: true,
    modelName: "user"
})
class User extends Model{

    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    declare id: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare password: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true
    })
    declare active: boolean;

    @CreatedAt
    declare created_at: Date;
    @UpdatedAt
    declare updated_at: Date;
}

export default User;