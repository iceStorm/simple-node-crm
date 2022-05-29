import Module from "src/core/decorators/module.decorator"
import EmployeesController from "./employees.controller"
import { MySQLUserStore } from "../user/stores/mysql.user.store"

@Module({
    controllers: [EmployeesController],
    providers: [MySQLUserStore],
})
export default class EmployeesModule {}
