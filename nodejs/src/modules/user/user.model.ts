import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import Employee from "../employees/employees.model"

@Entity()
export default class User extends BaseEntity {
    @PrimaryColumn()
    username!: string

    @Column()
    password!: string

    @OneToOne((type) => Employee)
    @JoinColumn()
    employeeNumber!: number
}
