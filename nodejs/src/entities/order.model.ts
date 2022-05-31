import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Product } from "."

@Entity()
export default class Order extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    orderNumber!: number

    @Column()
    orderDate!: Date

    @Column()
    requiredDate!: Date

    @Column()
    shippedsDate!: Date

    @Column()
    status!: string

    @Column()
    comments!: string
}

@Entity()
export class OrderDetail extends BaseEntity {
    @PrimaryColumn()
    @ManyToOne((type) => Order)
    @JoinColumn({ name: "orderNumber"})
    orderNumber!: number

    @PrimaryColumn()
    @ManyToMany((type) => Product)
    @JoinColumn({ name: "productCode"})
    productCode!: number

    @Column()
    quantityOrdered!: number

    @Column()
    priceEach!: number

    @Column()
    orderLineNumber!: number
}
