import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
} from "typeorm"

@Entity()
export class ProductLine extends BaseEntity {
    @PrimaryColumn({ length: 50 })
    productLine!: string

    @Column({ length: 4000, nullable: true })
    textDescription!: string

    @Column({ type: "mediumtext", nullable: true })
    htmlDescription!: string

    @Column({ type: "mediumblob", nullable: true })
    image!: string

    @OneToMany((type) => Product, (p) => p.productLine)
    products!: Product[]
}

@Entity()
export default class Product extends BaseEntity {
    @PrimaryColumn({ length: 15 })
    productCode!: string

    @Column({ length: 70 })
    productName!: string

    @ManyToOne((type) => ProductLine)
    @JoinColumn({ name: "productLine" })
    productLine!: ProductLine

    @Column({ length: 10 })
    productScale!: string

    @Column({ length: 50 })
    productVendor!: string

    @Column({ type: "text" })
    productDescription!: string

    @Column({ type: "smallint" })
    quantityInStock!: number

    @Column({ type: "decimal", precision: 10, scale: 2 })
    buyPrice!: number

    @Column({ type: "decimal", precision: 10, scale: 2 })
    MSRP!: number
}
