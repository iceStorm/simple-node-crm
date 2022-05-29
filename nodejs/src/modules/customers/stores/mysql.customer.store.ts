import { Injectable } from "src/core/decorators"
import Employee from "src/modules/employees/employees.model"
import customerModel from "../customer.model"
import CustomerStore from "../customer.store"

@Injectable()
export class MySQLCustomerStore extends CustomerStore {
    getAll(): customerModel[] {
        throw new Error("Method not implemented.")
    }
    getById(id: number): customerModel {
        throw new Error("Method not implemented.")
    }
    softRemoveById(id: number): customerModel | undefined {
        throw new Error("Method not implemented.")
    }
    permanentRemoveById(id: number): customerModel | undefined {
        throw new Error("Method not implemented.")
    }
    create(): customerModel {
        throw new Error("Method not implemented.")
    }
    updateById(id: number, updatedData: customerModel): customerModel | undefined {
        throw new Error("Method not implemented.")
    }
    constructor() {
        super()
    }
}
