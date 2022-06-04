import {
    Table,
    Column,
    Model,
    PrimaryKey,
    ForeignKey,
    BelongsTo,
    AutoIncrement,
    DataType,
    AllowNull,
} from "sequelize-typescript"

import { Employee } from "src/entities"

@Table
export default class Customer extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column({ type: DataType.INTEGER({ precision: 11 }) })
    customerNumber!: number

    @AllowNull(false)
    @Column({ type: DataType.STRING(50) })
    customerName!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(50) })
    contactLastName!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(50) })
    contactFirstName!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(50) })
    phone!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(50) })
    addressLine1!: string

    @Column({ type: DataType.STRING(50) })
    addressLine2!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(50) })
    city!: string

    @Column({ type: DataType.STRING(50) })
    state!: string

    @Column({ type: DataType.STRING(15) })
    postalCode!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(50) })
    country!: string

    @ForeignKey(() => Employee)
    @Column
    salesRepEmployeeNumber!: number

    @BelongsTo(() => Employee)
    salesRepEmployee!: Employee

    @Column({ type: DataType.DECIMAL(10, 2) })
    creditLimit!: number
}
