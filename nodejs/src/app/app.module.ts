import { Module } from "src/core/decorators"
import CustomerModule from "src/modules/customers/customer.module"
import EmployeesModule from "src/modules/employees/employees.module"
import OfficeModule from "src/modules/office/office.module"
import OrderModule from "src/modules/order/order.module"
import ProductModule from "src/modules/product/product.module"
import UserModule from "src/modules/user/user.module"
import AppController from "./app.controller"
import AppService from "./app.service"

@Module({
    imports: [EmployeesModule, CustomerModule, UserModule, ProductModule, OrderModule, OfficeModule],
    providers: [AppService],
    controllers: [AppController],
})
export default class AppModule {}
