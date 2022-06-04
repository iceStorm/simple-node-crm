import { Table, Column, BelongsTo, DataType, Model, ForeignKey, HasMany, PrimaryKey } from "sequelize-typescript"

import { Employee } from "../../entities"

@Table
export default class Office extends Model {
    @PrimaryKey
    @Column
    officeCode!: string

    @Column
    city!: string

    @Column({ type: DataType.TEXT })
    phone!: string

    @Column({ type: DataType.TEXT })
    addressLine1!: string

    @Column({ type: DataType.TEXT, allowNull: true })
    addressLine2?: string

    @Column({ type: DataType.TEXT, allowNull: true })
    state?: string

    @Column({ type: DataType.TEXT })
    country!: string

    @Column({ type: DataType.TEXT })
    postalCode!: string

    @Column({ type: DataType.TEXT })
    territory!: string

    @HasMany(() => Employee)
    employees!: Employee[]
}
