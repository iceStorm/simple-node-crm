import {
    Table,
    Column,
    BelongsTo,
    DataType,
    Model,
    ForeignKey,
    PrimaryKey,
    HasMany,
    AutoIncrement,
    AllowNull,
} from "sequelize-typescript"

import { Customer, Employee, Product } from "../../entities"

@Table
export default class Order extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER({ precision: 11 }) })
    orderNumber!: number

    @AllowNull(false)
    @Column({ type: DataType.DATEONLY })
    orderDate!: Date

    @AllowNull(false)
    @Column({ type: DataType.DATEONLY })
    requiredDate!: Date

    @Column({ type: DataType.DATEONLY })
    shippedDate!: Date

    @AllowNull(false)
    @Column({ type: DataType.STRING(15) })
    status!: string

    @Column({ type: DataType.TEXT })
    comments!: string

    @ForeignKey(() => Customer)
    @AllowNull(false)
    @Column({ type: DataType.INTEGER({ precision: 11 }) })
    customerNumber!: number

    @BelongsTo(() => Customer)
    customer!: Customer

    @HasMany(() => OrderDetail)
    orderDetails!: OrderDetail[]
}

@Table
export class OrderDetail extends Model {
    @ForeignKey(() => Order)
    @PrimaryKey
    @Column
    orderNumber!: number

    @ForeignKey(() => Product)
    @PrimaryKey
    @Column({ type: DataType.STRING(15) })
    productCode!: string

    @BelongsTo(() => Product)
    product!: Product

    @AllowNull(false)
    @Column
    quantityOrdered!: number

    @AllowNull(false)
    @Column({ type: DataType.DECIMAL(10, 2) })
    priceEach!: number

    @AllowNull(false)
    @Column({ type: DataType.SMALLINT({ length: 6 }) })
    orderLineNumber!: number

    @BelongsTo(() => Order)
    order!: Order
}
