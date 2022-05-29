import { Injectable } from "src/core/decorators"
import { DIContainer } from "src/core/injector"
import Customer from "./customer.model"
import CustomerStore from "./customer.store"

@Injectable()
export default class CustomerService {
    constructor(public customerStore: CustomerStore) {
        this.customerStore = customerStore ?? DIContainer.get(CustomerStore)
    }

    // getAllCustomers(): Customer[] | undefined {
    //     return this.customerStore.getAll()
    // }

    // getCustomerById(id: number): Customer | undefined {
    //     return this.customerStore.getById(id)
    // }

    // deleteCustomerById(id: number): Customer | undefined {
    //     return this.customerStore.permanentRemoveById(id)
    // }

    // createCustomer(): Customer {
    //     return this.customerStore.create()
    // }

    // updateCustomer(id: number, updatedCustomer: Customer): Customer | undefined {
    //     return this.customerStore.updateById(id, updatedCustomer)
    // }
}
