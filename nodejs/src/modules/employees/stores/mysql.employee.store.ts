import { SequelizeAdapter } from "src/common/db/mysql"
import { Injectable } from "src/core/decorators"
import Employee from "../employee.model"
import EmployeeStore from "../employee.store"
import EmployeeNotFoundError from "../errors/EmployeeNotFoundError"

@Injectable()
export class MySQLEmployeeStore extends EmployeeStore {
    getAll(): Promise<Employee[]> {
        return Employee.findAll()
    }

    getById(id: number): Promise<Employee | null> {
        return Employee.findOne({
            where: {
                employeeNumber: id,
            },
        })
    }

    softRemoveById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.")
    }

    async permanentRemoveById(id: number): Promise<boolean> {
        const affectedRows = await Employee.destroy({ where: { employeeNumber: id } })

        if (affectedRows == 0) {
            throw new EmployeeNotFoundError()
        }

        return true
    }

    async create(employee: Employee): Promise<Employee> {
        throw new Error("Method not implemented.")

        // const createResult = await Employee.create(employee)
        // return createResult
    }

    updateById(id: number, updatedData: Employee): Promise<Employee | null> {
        throw new Error("Method not implemented.")

        // return Employee.update({})
    }
}
