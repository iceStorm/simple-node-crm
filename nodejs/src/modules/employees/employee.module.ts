import Module from "src/core/decorators/module.decorator"
import EmployeeController from "./employee.controller"
import { MySQLUserStore } from "../user/stores/mysql.user.store"
import EmployeeService from "./employee.service"

@Module({
    controllers: [EmployeeController],
    providers: [MySQLUserStore, EmployeeService],
})
export default class EmployeeModule {}
