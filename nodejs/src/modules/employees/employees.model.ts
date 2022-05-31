import { Office } from "src/entities"
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "../user/user.model"

@Entity()
export default class Employee extends BaseEntity {
    @PrimaryGeneratedColumn()
    employeeNumber!: number

    @Column()
    lastName!: string

    @Column()
    firstName!: string

    @Column()
    extension!: string

    @Column()
    email!: string

    @ManyToOne((type) => Office, { nullable: false })
    @JoinColumn({ name: "officeCode" })
    officeCode!: string

    @ManyToOne((type) => Role, { nullable: false })
    @JoinColumn({ name: "jobTitle" })
    jobTitle!: string
}
