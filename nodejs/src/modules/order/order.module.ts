import Module from "src/core/decorators/module.decorator"
import OrderController from "./order.controller"
import OrderService from "./order.service"
import MySQLOrderStore from "./stores/mysql.order.store"

@Module({
    controllers: [OrderController],
    providers: [MySQLOrderStore, OrderService],
})
export default class OrderModule {}
