// import { Service } from "src/core/decorators"
// import { Injectable } from "src/core/decorators"
import Employee from "./employees.model"
import EmployeesStore from "./employees.store"

import { Inject, Service } from "typedi"

// @Injectable()
@Service()
export default class EmployeesService {
    constructor(private readonly employeeStore: EmployeesStore) {}

    getAllEmployees(): Employee[] | undefined {
        return this.employeeStore.getAll()
    }

    getEmployeeById(id: number): Employee | undefined {
        return this.employeeStore.getById(id)
    }

    deleteEmployeeById(id: number): Employee | undefined {
        return this.employeeStore.permanentRemoveById(id)
    }

    createEmployee(): Employee {
        return this.employeeStore.create()
    }

    updateEmployee(id: number, updatedEmployee: Employee): Employee | undefined {
        return this.employeeStore.updateById(id, updatedEmployee)
    }
}
