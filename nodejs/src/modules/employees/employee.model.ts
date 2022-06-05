import {
    Table,
    Column,
    BelongsTo,
    HasOne,
    DataType,
    Model,
    ForeignKey,
    HasMany,
    PrimaryKey,
    AllowNull,
} from "sequelize-typescript"
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
    @Column({ type: DataType.INTEGER({ precision: 11 }) })
    employeeNumber?: number

    @AllowNull(false)
    @Column({ type: DataType.STRING(50) })
    lastName!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(50) })
    firstName!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(10) })
    extension!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(100) })
    email!: string

    @BelongsTo(() => Office)
    office!: Office

    @ForeignKey(() => Office)
    @AllowNull(false)
    @Column({ type: DataType.STRING(10) })
    officeCode!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(50) })
    jobTitle!: string

    @ForeignKey(() => Role)
    // @AllowNull(false)
    @Column
    roleId!: number

    @BelongsTo(() => Role)
    role!: Role

    @ForeignKey(() => Employee)
    @Column({ type: DataType.INTEGER({ precision: 11 }) })
    reportsTo?: number

    @BelongsTo(() => Employee)
    reportsToEmployee!: Employee

    // @HasMany(() => Employee)
    // responsibleFor?: Employee[]

    @HasOne(() => User)
    user!: User

    @HasMany(() => Customer)
    customers!: Customer[]
}
