import { Injectable } from "src/core/decorators"
import Employee from "src/modules/employees/employees.model"
import Customer from "../customer.model"
import CustomerStore from "../customer.store"

@Injectable()
export class MySQLCustomerStore extends CustomerStore {
    getAll(): Promise<Customer[]> {
        throw new Error("Method not implemented.")
    }
    getById(id: number): Promise<Customer> {
        throw new Error("Method not implemented.")
    }
    softRemoveById(id: number): Promise<Customer | null> {
        throw new Error("Method not implemented.")
    }
    permanentRemoveById(id: number): Promise<Customer | null> {
        throw new Error("Method not implemented.")
    }
    create(): Promise<Customer> {
        throw new Error("Method not implemented.")
    }
    updateById(id: number, updatedData: Customer): Promise<Customer | null> {
        throw new Error("Method not implemented.")
    }
    
}
