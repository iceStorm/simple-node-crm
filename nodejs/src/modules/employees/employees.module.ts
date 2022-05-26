import Module from "src/core/decorators/module.decorator"
import EmployeesController from "./employees.controller"
import UserController from "./employees.controller"

@Module({
    controllers: [EmployeesController],
})
export default class EmployeesModule {}
