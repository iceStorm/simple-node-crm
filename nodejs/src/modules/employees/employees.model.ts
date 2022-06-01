import { Exclude } from "class-transformer"
import e from "express"
import { Office } from "src/entities"
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import User, { Role } from "../user/user.model"

@Entity()
export default class Employee extends BaseEntity {
    @PrimaryGeneratedColumn()
    employeeNumber!: number

    @OneToOne((type) => User, (u) => u.employee)
    @JoinColumn()
    user!: User

    @Column({ length: 50 })
    lastName!: string

    @Column({ length: 50 })
    firstName!: string

    @Column({ length: 10 })
    extension!: string

    @Column({ length: 100 })
    email!: string

    // @Column()
    // officeCode!: string

    @ManyToOne((type) => Office, (o) => o.officeCode, { nullable: false, eager: true })
    @JoinColumn({ name: "officeCode", referencedColumnName: "officeCode" })
    office!: Office

    // @Column()
    // roleId!: number

    @ManyToOne((type) => Role, (r) => r.id, { nullable: false, eager: true })
    @JoinColumn({ name: "roleId" })
    role!: Role

    // slaves
    @ManyToOne((type) => Employee, (e) => e.responsibleFor)
    @JoinColumn({ name: "reportsTo" })
    reportsTo?: Employee

    // master
    @OneToMany((type) => Employee, (e) => e.reportsTo)
    responsibleFor?: Employee[]

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

switch (5 > 6) {
    case true:
        const a = 5
        break

    default:
        break
}
