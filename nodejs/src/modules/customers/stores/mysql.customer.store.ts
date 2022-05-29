import { Injectable } from "src/core/decorators"
import Employee from "src/modules/employees/employees.model"
import customerModel from "../customer.model"
import CustomerStore from "../customer.store"

@Injectable()
export class MySQLCustomerStore extends CustomerStore {
    getAll(): Promise<customerModel[]> {
        throw new Error("Method not implemented.")
    }
    getById(id: number): Promise<customerModel> {
        throw new Error("Method not implemented.")
    }
    softRemoveById(id: number): Promise<customerModel | undefined> {
        throw new Error("Method not implemented.")
    }
    permanentRemoveById(id: number): Promise<customerModel | undefined> {
        throw new Error("Method not implemented.")
    }
    create(): Promise<customerModel> {
        throw new Error("Method not implemented.")
    }
    updateById(id: number, updatedData: customerModel): Promise<customerModel | undefined> {
        throw new Error("Method not implemented.")
    }
    
}
