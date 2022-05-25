import { Service } from "src/core/decorators"
import Employee from "./employees.model"

import mockEmployeeStore from "./stores/mock.employee.store"

class EmployeesService {
    getAllEmployees(): Employee[] | undefined {
        return mockEmployeeStore.getAll()
    }

    getEmployeeById(id: number): Employee | undefined {
        return mockEmployeeStore.getById(id)
    }

    deleteEmployeeById(id: number): Employee | undefined {
        return mockEmployeeStore.permanentRemoveById(id)
    }

    createEmployee(): Employee {
        return mockEmployeeStore.create()
    }

    updateEmployee(id: number, updatedEmployee: Employee): Employee | undefined {
        return mockEmployeeStore.updateById(id, updatedEmployee)
    }
}

export default new EmployeesService()
