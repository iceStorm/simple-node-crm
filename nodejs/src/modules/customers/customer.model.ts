import { Employee, Office } from "src/entities"
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "../user/user.model"

@Entity()
export default class Customer extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    customerNumber!: number

    @Column({ length: 50 })
    customerName!: string

    @Column({ length: 50 })
    contactLastName!: string

    @Column({ length: 50 })
    contactFirstName!: string

    @Column({ length: 50 })
    phone!: string

    @Column({ length: 50 })
    addressLine1!: string

    @Column({ length: 50, nullable: true })
    addressLine2!: string

    @Column({ length: 50 })
    city!: string

    @Column({ length: 50, nullable: true })
    state!: string

    @Column({ length: 50, nullable: true })
    postalCode!: string

    @Column({ length: 50 })
    country!: string

    @ManyToOne((type) => Employee, { nullable: true, eager: true})
    @JoinColumn({ name: "salesRepEmployeeNumber" })
    salesRepEmployeeNumber!: Employee

    @Column({ nullable: true, type: "decimal", precision: 10, scale: 2 })
    creditLimit!: number
}
