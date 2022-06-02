import BaseStore from "src/common/base.store"
import Employee from "./employee.model"

export default abstract class EmployeeStore extends BaseStore<Employee> {
    haizz() {}
}
