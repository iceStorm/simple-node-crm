import e from "express"
import { Office } from "src/entities"
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import User, { Role } from "../user/user.model"

@Entity()
export default class Employee extends BaseEntity {
    @PrimaryGeneratedColumn()
    employeeNumber!: number

    @OneToOne((type) => User, (u) => u.employee)
    user!: User

    @Column({ length: 50 })
    lastName!: string

    @Column({ length: 50 })
    firstName!: string

    @Column({ length: 10 })
    extension!: string

    @Column({ length: 100 })
    email!: string

    @ManyToOne((type) => Office, { nullable: false })
    @JoinColumn({ name: "officeCode" })
    office!: Office

    @ManyToOne((type) => Role, (r) => r.employees, { nullable: false })
    @JoinColumn({ name: "roleId" })
    role!: Role

    // slaves
    @ManyToOne((type) => Employee, (e) => e.responsibleFor)
    @JoinColumn({ name: "reportsTo" })
    reportsTo!: Employee

    // master
    @OneToMany((type) => Employee, (e) => e.reportsTo)
    responsibleFor?: Employee[]

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
