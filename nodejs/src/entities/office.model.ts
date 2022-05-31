import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class Office extends BaseEntity {
    @PrimaryColumn()
    officeCode!: string

    @Column()
    city!: string

    @Column()
    phone!: string

    @Column()
    addressLine1!: string

    @Column()
    addressLine2!: string

    @Column()
    state!: string

    @Column()
    country!: string

    @Column()
    postalCode!: string

    @Column()
    territory!: string
}
