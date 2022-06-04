import { Injectable } from "src/core/decorators"
import Customer from "../customer.model"
import CustomerStore from "../customer.store"
import CustomerNotFoundError from "../errors/CustomerNotFoundError"

@Injectable()
export class MySQLCustomerStore extends CustomerStore {
    getAll(): Promise<Customer[]> {
        return Customer.findAll()
    }

    getById(id: number): Promise<Customer | null> {
        return Customer.findOne({
            where: {
                customerNumber: id,
            },
        })
    }

    softRemoveById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.")
    }

    async permanentRemoveById(id: number): Promise<boolean> {
        const affectedRows = await Customer.destroy({ where: { customerNumber: id } })

        if (affectedRows == 0) {
            throw new CustomerNotFoundError()
        }

        return true
    }

    async create(customer: Customer): Promise<Customer> {
        delete customer.customerNumber

        const createResult = await (await Customer.create(customer)).save()
        return createResult
    }

    async updateById(id: number, updatedData: Customer): Promise<Customer | null> {
        // prevent updating id
        delete updatedData.customerNumber

        const affectedRows = await Customer.update(updatedData, {
            where: {
                customerNumber: id,
            },
        })

        return Customer.findOne({ where: { customerNumber: id } })
    }
}
