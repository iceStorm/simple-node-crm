import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    Unique,
} from "typeorm"
import Employee from "../employees/employees.model"

@Entity()
export default class User extends BaseEntity {
    @PrimaryColumn()
    username!: string

    @Column()
    password!: string

    @Column({ unique: true })
    @OneToOne((type) => Employee, { nullable: false })
    @JoinColumn({ name: "employeeNumber" })
    employeeNumber!: number
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
}
