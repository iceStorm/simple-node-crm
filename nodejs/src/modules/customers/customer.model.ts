import { Table, Column, Model, PrimaryKey, ForeignKey, BelongsTo, AutoIncrement, DataType } from "sequelize-typescript"

import { Employee } from "src/entities"

@Table
export default class Customer extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    customerNumber!: number

    @Column({ type: DataType.STRING(50) })
    customerName!: string

    @Column({ type: DataType.STRING(50) })
    contactLastName!: string

    @Column({ type: DataType.STRING(50) })
    contactFirstName!: string

    @Column({ type: DataType.STRING() })
    phone!: string

    @Column({ type: DataType.STRING() })
    addressLine1!: string

    @Column({ type: DataType.STRING(), allowNull: true })
    addressLine2!: string

    @Column({ type: DataType.STRING() })
    city!: string

    @Column({ type: DataType.STRING(), allowNull: true })
    state!: string

    @Column({ type: DataType.STRING(), allowNull: true })
    postalCode!: string

    @Column({ type: DataType.STRING() })
    country!: string

    @ForeignKey(() => Employee)
    @Column
    salesRepEmployeeNumber!: number

    @BelongsTo(() => Employee)
    salesRepEmployee!: Employee

    @Column({ type: DataType.DECIMAL(10, 2) })
    creditLimit!: number
}
