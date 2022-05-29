import { Module } from "src/core/decorators"
import CustomerModule from "src/modules/customers/customer.module"
import EmployeesModule from "src/modules/employees/employees.module"
import UserModule from "src/modules/user/user.module"
import AppController from "./app.controller"
import AppService from "./app.service"

@Module({
    imports: [EmployeesModule, CustomerModule, UserModule],
    providers: [AppService],
    controllers: [AppController],
})
export default class AppModule {}
