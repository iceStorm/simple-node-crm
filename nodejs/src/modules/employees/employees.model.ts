import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class Employee extends BaseEntity {
    @PrimaryGeneratedColumn()
    employeeNumber!: number
}
