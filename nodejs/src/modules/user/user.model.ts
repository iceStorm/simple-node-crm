import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    Unique,
} from "typeorm"
import Employee from "../employees/employee.model"

@Entity()
@Unique(["employee"])
export default class User extends BaseEntity {
    @PrimaryColumn()
    username!: string

    @Column()
    password!: string

    @OneToOne((type) => Employee, (e) => e.user, { nullable: false })
    @JoinColumn({ name: "employeeNumber" })
    employee!: Employee
}

@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id!: number

    @Column({
        unique: true,
        length: 50,
    })
    name!: string

    // @OneToMany((type) => Employee, (e) => e.role)
    // employees!: Employee[]
}
