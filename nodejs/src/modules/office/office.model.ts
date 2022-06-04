import {
    Table,
    Column,
    BelongsTo,
    DataType,
    Model,
    ForeignKey,
    HasMany,
    PrimaryKey,
    AllowNull,
} from "sequelize-typescript"

import { Employee } from "../../entities"

@Table
export default class Office extends Model {
    @PrimaryKey
    @Column({ type: DataType.STRING(10) })
    officeCode!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(50) })
    city!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(50) })
    phone!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(50) })
    addressLine1!: string

    @Column({ type: DataType.STRING(50) })
    addressLine2?: string

    @Column({ type: DataType.STRING(50) })
    state?: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(50) })
    country!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(15) })
    postalCode!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(10) })
    territory!: string

    @HasMany(() => Employee)
    employees!: Employee[]
}
