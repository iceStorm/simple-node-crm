import {
    Table,
    Column,
    BelongsTo,
    DataType,
    Model,
    ForeignKey,
    PrimaryKey,
    HasMany,
    Length,
    AutoIncrement,
    AllowNull,
    Unique,
    Default,
} from "sequelize-typescript"

import Employee from "../employees/employee.model"

@Table
export default class User extends Model {
    @PrimaryKey
    @Column({ type: DataType.STRING(50) })
    username!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(255) })
    password!: string

    @ForeignKey(() => Employee)
    @AllowNull(false)
    @Unique
    @Column({ type: DataType.INTEGER })
    employeeNumber!: number

    @BelongsTo(() => Employee)
    employee!: Employee
}

@Table
export class Role extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column({ type: DataType.INTEGER({ precision: 11 }) })
    roleId!: number

    @AllowNull(false)
    @Unique
    @Column({ type: DataType.STRING(50) })
    name!: string

    // @HasMany(() => Employee)
    // employees!: Employee[]
}
