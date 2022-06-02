import { Injectable } from "src/core/decorators"
import Employee from "../employee.model"
import EmployeeStore from "../employee.store"

@Injectable()
export class MySQLEmployeeStore extends EmployeeStore {
    getAll(): Promise<Employee[]> {
        return Employee.find()
    }

    getById(id: number): Promise<Employee | null> {
        return Employee.findOneBy({
            employeeNumber: id,
        })
    }

    softRemoveById(id: number): Promise<Employee | null> {
        throw new Error("Method not implemented.")
    }

    permanentRemoveById(id: number): Promise<Employee | null> {
        throw new Error("Method not implemented.")
    }

    create(): Promise<Employee> {
        throw new Error("Method not implemented.")
    }

    updateById(id: number, updatedData: Employee): Promise<Employee | null> {
        throw new Error("Method not implemented.")
    }
}
