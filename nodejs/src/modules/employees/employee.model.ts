import { Office } from "src/entities"
import {
    AfterLoad,
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    Tree,
    TreeChildren,
    TreeParent,
} from "typeorm"
import User, { Role } from "../user/user.model"
import Customer from "../customers/customer.model"

@Entity()
@Tree("adjacency-list")
export default class Employee extends BaseEntity {
    @PrimaryGeneratedColumn()
    employeeNumber!: number

    @Column({ length: 50 })
    lastName!: string

    @Column({ length: 50 })
    firstName!: string

    @Column({ length: 10 })
    extension!: string

    @Column({ length: 100 })
    email!: string

    @Column()
    officeCode!: string

    @Column()
    roleId!: number

    @ManyToMany((type) => Employee, )
    @JoinColumn({ name: "reportsTo" })
    reportsTo?: Employee

    // master
    // @ManyToOne((type) => Employee, (e) => e.reportsTo)
    // responsibleFor?: Employee[]

    // EMBEDDED PROPS
    @ManyToOne((type) => Office, (o) => o.officeCode, { nullable: false, eager: true })
    @JoinColumn({ name: "officeCode" })
    office!: Office

    @ManyToOne((type) => Role, (r) => r.id, { nullable: false, eager: true })
    @JoinColumn({ name: "roleId" })
    role!: Role

    @OneToOne((type) => User, (u) => u.employee, { eager: true })
    user!: User

    @AfterLoad()
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
