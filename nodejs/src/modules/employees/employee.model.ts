import { Table, Column, BelongsTo, HasOne, DataType, Model, ForeignKey, HasMany, PrimaryKey } from "sequelize-typescript"
import { Optional } from "sequelize"

import { Role } from "../user/user.model"
import { Office, Customer, User } from "src/entities"
import { SequelizeAdapter } from "src/common/db/mysql"

// interface EmployeeAttributes {
//     employeeNumber: number
//     lastName: string
//     firstName: string
//     extension: string
//     email: string
//     officeCode: string
//     roleId: number
//     reportsTo?: number
// }

// interface EmployeeCreationAttributes extends Omit<EmployeeAttributes, "employeeNumber" | "id"> {}

@Table
export default class Employee extends Model<Employee> {
    @PrimaryKey
    @Column
    employeeNumber!: number

    @Column({ type: DataType.STRING(50) })
    lastName!: string

    @Column({ type: DataType.STRING(50) })
    firstName!: string

    @Column({ type: DataType.STRING(50) })
    extension!: string

    @Column({ type: DataType.STRING(50) })
    email!: string

    @BelongsTo(() => Office)
    office!: Office

    @ForeignKey(() => Office)
    @Column({ type: DataType.STRING() })
    officeCode!: string

    @ForeignKey(() => Role)
    @Column
    roleId!: number

    @BelongsTo(() => Role)
    role!: Role

    @ForeignKey(() => Employee)
    @Column
    reportsTo?: number

    @BelongsTo(() => Employee)
    reportsToEmployee!: Employee

    @HasMany(() => Employee)
    responsibleFor?: Employee[]

    @HasOne(() => User)
    user!: User
}
