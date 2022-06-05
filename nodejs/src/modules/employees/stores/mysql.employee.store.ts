import { SequelizeAdapter } from "src/common/db/mysql"
import { Injectable } from "src/core/decorators"
import { Customer } from "src/entities"
import Employee from "../employee.model"
import EmployeeStore from "../employee.store"
import EmployeeNotFoundError from "../errors/EmployeeNotFoundError"

@Injectable()
export class MySQLEmployeeStore extends EmployeeStore {
    async getReporteessOfEmployee(employeeNumber: number): Promise<Employee[]> {
        const reportees = await Employee.findAll({
            where: {
                reportsTo: employeeNumber,
            },
        })

        return reportees
    }

    async getCustomersOfEmployee(employeeNumber: number): Promise<Customer[]> {
        const customers = Customer.findAll({
            where: {
                salesRepEmployeeNumber: employeeNumber,
            },
        })

        return customers
    }

    getAll(): Promise<Employee[]> {
        return Employee.findAll({
            include: [{ model: Customer }, { model: Employee }],
        })
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
        delete employee.employeeNumber

        const createResult = await (await Employee.create(employee)).save()
        return createResult
    }

    async updateById(id: number, updatedData: Employee): Promise<Employee | null> {
        // prevent updating id
        delete updatedData.employeeNumber

        const affectedRows = await Employee.update(updatedData, {
            where: {
                employeeNumber: id,
            },
        })

        return Employee.findOne({ where: { employeeNumber: id } })
    }
}
