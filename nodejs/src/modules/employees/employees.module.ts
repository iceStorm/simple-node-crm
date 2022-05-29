import Module from "src/core/decorators/module.decorator"
import EmployeesController from "./employees.controller"
import { MySQLEmployeesStore } from "../user/stores/mysql.user.store"

@Module({
    controllers: [EmployeesController],
    providers: [MySQLEmployeesStore],
})
export default class EmployeesModule {}
