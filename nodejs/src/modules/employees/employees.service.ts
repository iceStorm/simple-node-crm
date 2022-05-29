import Employee from "./employees.model"
import EmployeesStore from "./employees.store"
import { Injectable } from "src/core/decorators"
import { DIContainer } from "src/core/injector"

@Injectable()
export default class EmployeesService {
    constructor(public employeeStore: EmployeesStore) {
        this.employeeStore = employeeStore ?? DIContainer.get(EmployeesStore)
    }

    getAllEmployees() {
        return this.employeeStore.getAll()
    }

    getEmployeeById(id: number) {
        return this.employeeStore.getById(id)
    }

    deleteEmployeeById(id: number){
        return this.employeeStore.permanentRemoveById(id)
    }

    createEmployee() {
        return this.employeeStore.create()
    }

    updateEmployee(id: number, updatedEmployee: Employee){
        return this.employeeStore.updateById(id, updatedEmployee)
    }
}
