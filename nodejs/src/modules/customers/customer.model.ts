import { Employee, Office } from "src/entities"
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "../user/user.model"

@Entity()
export default class Customer extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    customerNumber!: number

    @Column("varchar", { length: 50 })
    customerName!: string

    @Column("varchar", { length: 50 })
    contactLastName!: string

    @Column("varchar", { length: 50 })
    contactFirstName!: string

    @Column("varchar", { length: 50 })
    phone!: string

    @Column("varchar", { length: 50 })
    addressLine1!: string

    @Column("varchar", { length: 50, nullable: true })
    addressLine2!: string

    @Column("varchar", { length: 50 })
    city!: string

    @Column("varchar", { length: 50, nullable: true })
    state!: string

    @Column("varchar", { length: 50, nullable: true })
    postalCode!: string

    @Column("varchar", { length: 50 })
    country!: string

    @ManyToOne((type) => Employee, { nullable: true, eager: true })
    @JoinColumn({ name: "salesRepEmployeeNumber" })
    salesRepEmployee!: Employee

    @Column({ nullable: true })
    salesRepEmployeeNumber!: number

    @Column({ nullable: true, type: "decimal", precision: 10, scale: 2 })
    creditLimit!: number
}
