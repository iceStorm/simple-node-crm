import Module from "src/core/decorators/module.decorator"
import EmployeesController from "./employees.controller"
import EmployeesService from "./employees.service"
import MockEmployeeStore from "./stores/mock.employee.store"

@Module({
    controllers: [EmployeesController],
    providers: [MockEmployeeStore, EmployeesService],
})
export default class EmployeesModule {}
