import { Injectable } from "src/core/decorators"
import Customer from "../customer.model"
import CustomerStore from "../customer.store"

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

    permanentRemoveById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.")
    }

    create(): Promise<Customer> {
        throw new Error("Method not implemented.")
    }

    updateById(id: number, updatedData: Customer): Promise<Customer | null> {
        throw new Error("Method not implemented.")
    }
}
