import { Injectable } from "src/core/decorators"
import Employee from "src/modules/employees/employees.model"
import EmployeesStore from "src/modules/employees/employees.store"

@Injectable()
export class MySQLEmployeesStore extends EmployeesStore {
    constructor() {
        super()
    }

    getAll(): Employee[] {
        throw new Error("Method not implemented.")
    }
    getById(id: number): Employee {
        throw new Error("Method not implemented.")
    }
    softRemoveById(id: number): Employee | undefined {
        throw new Error("Method not implemented.")
    }
    permanentRemoveById(id: number): Employee | undefined {
        throw new Error("Method not implemented.")
    }
    create(): Employee {
        throw new Error("Method not implemented.")
    }
    updateById(id: number, updatedEmployee: Employee): Employee | undefined {
        throw new Error("Method not implemented.")
    }
}
