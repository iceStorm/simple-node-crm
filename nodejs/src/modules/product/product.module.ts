import Module from "src/core/decorators/module.decorator"
import ProductController from "./product.controller"
import ProductService from "./product.service"
import { MySQLProductStore } from "./stores/mysql.product.store"

@Module({
    controllers: [ProductController],
    providers: [MySQLProductStore, ProductService],
})
export default class ProductModule {}
