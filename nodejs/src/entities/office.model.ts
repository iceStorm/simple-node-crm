import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Employee } from "."

@Entity()
export default class Office extends BaseEntity {
    @PrimaryColumn({ length: 10 })
    officeCode!: string

    @Column({ length: 50 })
    city!: string

    @Column({ length: 50 })
    phone!: string

    @Column({ length: 50 })
    addressLine1!: string

    @Column({ length: 50, nullable: true })
    addressLine2?: string

    @Column({ length: 50, nullable: true })
    state?: string

    @Column({ length: 50 })
    country!: string

    @Column({ length: 15 })
    postalCode!: string

    @Column({ length: 10 })
    territory!: string

    // not denoted to be a column, just use in code level
    @OneToMany((type) => Employee, (e) => e.office)
    employees!: Employee[]
}
