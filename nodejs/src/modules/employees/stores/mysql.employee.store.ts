import { Injectable } from "src/core/decorators"
import Employee from "../employee.model"
import EmployeeStore from "../employee.store"
import EmployeeNotFoundError from "../errors/EmployeeNotFoundError"

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

    softRemoveById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.")
    }

    async permanentRemoveById(id: number): Promise<boolean> {
        const deleteResult = await Employee.getRepository().delete({ employeeNumber: id })

        if ((deleteResult.affected ?? 0) == 0) {
            throw new EmployeeNotFoundError()
        }

        return true
    }

    create(employee: Employee): Promise<Employee> {
        return Employee.create(employee).save()
    }

    updateById(id: number, updatedData: Employee): Promise<Employee | null> {
        throw new Error("Method not implemented.")
    }
}
