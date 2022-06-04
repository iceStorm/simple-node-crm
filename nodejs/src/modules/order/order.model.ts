import { Table, Column, BelongsTo, DataType, Model, ForeignKey, PrimaryKey, HasMany } from "sequelize-typescript"
import { Customer, Employee, Product } from "../../entities"

@Table
export default class Order extends Model {
    @PrimaryKey
    @Column
    orderNumber!: number

    @HasMany(() => OrderDetail)
    orderDetails!: OrderDetail[]

    @Column({ type: DataType.DATE })
    orderDate!: Date

    @Column({ type: DataType.DATE })
    requiredDate!: Date

    @Column({ type: DataType.DATE, allowNull: true })
    shippedDate!: Date

    @Column
    status!: string

    @Column({ type: DataType.STRING, allowNull: true })
    comments!: string

    @ForeignKey(() => Customer)
    customerNumber!: number

    @BelongsTo(() => Customer)
    customer!: Customer
}

@Table
export class OrderDetail extends Model {
    @ForeignKey(() => Order)
    @PrimaryKey
    @Column
    orderNumber!: number

    @BelongsTo(() => Order, )
    order!: Order

    @ForeignKey(() => Product)
    @PrimaryKey
    @Column
    productCode!: string

    @BelongsTo(() => Product)
    product!: Product

    @Column
    quantityOrdered!: number

    @Column({ type: DataType.DECIMAL(10, 2) })
    priceEach!: number

    @Column({ type: DataType.SMALLINT({ length: 6 }) })
    orderLineNumber!: number
}
