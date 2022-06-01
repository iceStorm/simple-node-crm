import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
} from "typeorm"
import { Customer, Product } from "../../entities"

@Entity()
export default class Order extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    orderNumber!: number

    // @OneToMany((type) => OrderDetail)
    // orderDetails!: OrderDetail[]

    @Column({ type: "date" })
    orderDate!: Date

    @Column({ type: "date" })
    requiredDate!: Date

    @Column({ type: "date", nullable: true })
    shippedDate!: Date

    @Column({ length: 15 })
    status!: string

    @Column({ type: "text", nullable: true })
    comments!: string

    @ManyToOne((type) => Customer, { nullable: false })
    @JoinColumn({ name: "customerNumber" })
    customerNumber!: number
}

@Entity()
export class OrderDetail extends BaseEntity {
    @PrimaryColumn({ primary: true })
    @ManyToOne((type) => Order, o => o.orderNumber)
    @JoinColumn({ name: "orderNumber" })
    orderNumber!: number

    // @ManyToOne((type) => Order, (o) => o.orderDetails)
    // order!: Order

    @PrimaryColumn({ primary: true, length: 15 })
    @ManyToOne((type) => Product)
    @JoinColumn({ name: "productCode" })
    productCode!: string

    // @ManyToOne((type) => Order, (o) => o.orderDetails)
    // product!: Product

    @Column()
    quantityOrdered!: number

    @Column({ type: "decimal", precision: 10, scale: 2 })
    priceEach!: number

    @Column({ type: "smallint", precision: 6 })
    orderLineNumber!: number
}
