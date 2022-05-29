import Module from "src/core/decorators/module.decorator"
import CustomerController from "./customer.controller"
import { MySQLCustomerStore } from "./stores/mysql.customer.store"

@Module({
    controllers: [CustomerController],
    providers: [MySQLCustomerStore],
})
export default class CustomerModule {}
