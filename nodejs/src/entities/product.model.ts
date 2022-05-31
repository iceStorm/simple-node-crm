import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
} from "typeorm"

@Entity()
export default class Product extends BaseEntity {
    @PrimaryColumn()
    productCode!: string

    @Column()
    productName!: string

    @ManyToOne((type) => ProductLine)
    @JoinColumn({ name: "productLine" })
    productLine!: string
}

@Entity()
export class ProductLine extends BaseEntity {
    @PrimaryColumn()
    productLine!: string

    @Column()
    textDescription!: string

    @Column()
    htmlDescription!: string

    @Column()
    imageUrl!: string
}
