import { Injectable } from "src/core/decorators"
import Employee from "../employees.model"
import EmployeeStore from "../employees.store"

@Injectable()
export class MySQLEmployeeStore extends EmployeeStore {
    async authenticate(Employeename: string, password: string) {
        return Employee.findOneBy({
            employeeNumber: 1,
        })
    }

    getAll(): Promise<Employee[]> {
        throw new Error("Method not implemented.")
    }

    getById(id: number): Promise<Employee> {
        throw new Error("Method not implemented.")
    }

    softRemoveById(id: number): Promise<Employee | undefined> {
        throw new Error("Method not implemented.")
    }

    permanentRemoveById(id: number): Promise<Employee | undefined> {
        throw new Error("Method not implemented.")
    }

    create(): Promise<Employee> {
        throw new Error("Method not implemented.")
    }

    updateById(id: number, updatedData: Employee): Promise<Employee | undefined> {
        throw new Error("Method not implemented.")
    }
}
