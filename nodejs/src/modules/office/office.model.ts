import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Employee } from "../../entities"

@Entity()
export default class Office extends BaseEntity {
    @PrimaryColumn("varchar", { length: 10 })
    officeCode!: string

    @Column("varchar", { length: 50 })
    city!: string

    @Column("varchar", { length: 50 })
    phone!: string

    @Column("varchar", { length: 50 })
    addressLine1!: string

    @Column("varchar", { length: 50, nullable: true })
    addressLine2?: string

    @Column("varchar", { length: 50, nullable: true })
    state?: string

    @Column("varchar", { length: 50 })
    country!: string

    @Column("varchar", { length: 15 })
    postalCode!: string

    @Column("varchar", { length: 10 })
    territory!: string

    // not denoted to be a column, just use in code level
    // @OneToMany((type) => Employee, (e) => e.officeCode)
    // employees!: Employee[]
}
