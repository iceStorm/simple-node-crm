import mysql2 from "mysql2"

import { AppConfig } from "src/config"
import Employee from "src/modules/employees/employees.model"
import { DataSource } from "typeorm"
import { Customer, Office, Product, User } from "src/entities"
import { Role } from "src/modules/user/user.model"
import Order, { OrderDetail } from "src/modules/order/order.model"
import { ProductLine } from "src/modules/product/product.model"

const TypeOrmProvider = new DataSource({
    type: "mysql",
    host: AppConfig.dbConfig.mysql.host,
    port: AppConfig.dbConfig.mysql.port,
    username: AppConfig.dbConfig.mysql.user,
    password: AppConfig.dbConfig.mysql.password,
    database: AppConfig.dbConfig.mysql.database,
    synchronize: true,
    logging: true,
    entities: [Role, Office, Employee, Customer, User, ProductLine, Product, Order, OrderDetail],
    subscribers: [],
    migrations: [],
    driver: mysql2,
})

export default TypeOrmProvider
