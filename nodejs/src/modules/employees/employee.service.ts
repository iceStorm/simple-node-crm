import Employee from "./employee.model"
import EmployeesStore from "./employee.store"
import { Injectable } from "src/core/decorators"
import { DIContainer } from "src/core/injector"
import BaseService from "src/common/base.service"

@Injectable()
export default class EmployeeService extends BaseService<Employee> {
    constructor(private employeeStore: EmployeesStore) {
        super()
    }

    getAllEmployees() {
        return this.employeeStore.getAll()
    }

    getEmployeeById(id: number) {
        return this.employeeStore.getById(id)
    }

    deleteEmployeeById(id: number) {
        return this.employeeStore.permanentRemoveById(id)
    }

    createEmployee(employee: Employee) {
        return this.employeeStore.create(employee)
    }

    updateEmployee(id: number, updatedEmployee: Employee) {
        return this.employeeStore.updateById(id, updatedEmployee)
    }
}
