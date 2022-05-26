import { Module } from "src/core/decorators"
import EmployeesModule from "src/modules/employees/employees.module"
import UserModule from "src/modules/user/user.module"
import AppController from "./app.controller"
import AppService from "./app.service"

@Module({
    imports: [UserModule, EmployeesModule],
    providers: [AppService],
    controllers: [AppController],
})
export default class AppModule {}
