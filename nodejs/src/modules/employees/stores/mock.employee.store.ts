import { Injectable } from "src/core/decorators"
import { Service } from "typedi"
import Employee from "../employees.model"
import EmployeesStore from "../employees.store"

@Injectable()
class MockEmployeeStore extends EmployeesStore {
    private data: Employee[] = []

    constructor() {
        super();
        
        // MOCK DATA
        this.data.push(
            new Employee(
                0,
                false,
                "Employee",
                "name",
                "mail@employee.com",
                "abc",
                "FHU",
                0,
                `DEV010}`
            )
        )
    }

    private getRandomUniqueId(): number {
        let randomId = 0

        const MIN = 1
        const MAX = 100

        do {
            randomId = Math.floor(MIN + Math.random() * (MAX - MIN))
        } while (this.data.some((e) => e.id === randomId))

        return randomId
    }

    create(): Employee {
        const randomId = this.getRandomUniqueId()

        const newEmployee = new Employee(
            randomId,
            false,
            "Employee",
            "name",
            "mail@employee.com",
            "abc",
            "FHU",
            randomId,
            `DEV${randomId.toString().padStart(2, "0")}`
        )

        this.data.push(newEmployee)
        return newEmployee
    }

    getAll(): Employee[] {
        return this.data
    }

    getById(id: number): Employee {
        return this.data.filter((e) => e.id === id)[0]
    }

    softRemoveById(id: number): Employee | undefined {
        const employeeToRemove = this.data.filter((e) => e.id === id)

        if (employeeToRemove.length > 0) {
            employeeToRemove[0].removed = true
            return employeeToRemove[0]
        }
    }

    permanentRemoveById(id: number): Employee | undefined {
        const employeeToRemove = this.data.filter((e) => e.id === id)

        if (employeeToRemove.length > 0) {
            const indexToRemove = this.data.indexOf(employeeToRemove[0], 0)
            return this.data.splice(indexToRemove, 1)[0]
        }
    }

    updateById(id: number, updatedEmployee: Employee): Employee | undefined {
        const employeeToUpdate = this.data.filter((e) => e.id === id)

        if (employeeToUpdate.length > 0) {
            employeeToUpdate[0] = {
                ...updatedEmployee,
                id: employeeToUpdate[0].id, // keep old id
                removed: employeeToUpdate[0].removed, // keep old removed-state
            }

            return updatedEmployee
        }
    }
}

export default MockEmployeeStore
