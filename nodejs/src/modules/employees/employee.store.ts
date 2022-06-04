import BaseStore from "src/common/base.store"
import Customer from "../customers/customer.model"
import Employee from "./employee.model"

export default abstract class EmployeeStore extends BaseStore<Employee> {
    abstract getCustomersOfEmployee(employeeNumber: number): Promise<Customer[]>
}
