import BaseStore from "src/common/base.store"
import Employee from "./employees.model"

export default abstract class EmployeeStore extends BaseStore<Employee> {}
