import { DataTypes, Sequelize, UUIDV4 } from 'sequelize';
import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript'

@Table({
    tableName: "Organization",
    timestamps: true,
    modelName: "organizations"
})
class Organization extends Model{

    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    declare id: string;

    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare user_id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare organization_name: string;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    declare funds: number;
    
    // @Column({
    //     type: DataType.UUID,
    //     allowNull: true
    // })
    // declare lineup_id: string;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    declare fans: number;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    declare org_logo: string;

    @Column({
        type: DataType.BOOLEAN,
    })
    declare active: boolean;

    @CreatedAt
    declare created_at: Date;
    @UpdatedAt
    declare updated_at: Date;
}

export default Organization;