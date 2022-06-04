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
} from "sequelize-typescript"

import Employee from "../employees/employee.model"

@Table
export default class User extends Model {
    @PrimaryKey
    @Column({ type: DataType.STRING(50) })
    username!: string

    @Column
    password!: string

    @ForeignKey(() => Employee)
    employeeNumber!: number

    @BelongsTo(() => Employee)
    employee!: Employee
}

@Table
export class Role extends Model {
    @PrimaryKey
    @Column
    declare id: number

    @Column({ type: DataType.STRING(50), unique: true })
    name!: string

    @HasMany(() => Employee)
    employees!: Employee[]
}
