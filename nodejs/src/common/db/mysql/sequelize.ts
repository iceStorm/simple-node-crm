// import { Sequelize, Model, DataTypes } from "sequelize"
import { Sequelize } from "sequelize-typescript"

import { AppConfig } from "src/config"
import { Customer, Employee, Office, Product, User } from "src/entities"
import Order, { OrderDetail } from "src/modules/order/order.model"
import { ProductLine } from "src/modules/product/product.model"
import { Role } from "src/modules/user/user.model"

const sequelizeAdapter = new Sequelize({
    dialect: "mysql",
    host: AppConfig.dbConfig.mysql.host,
    port: AppConfig.dbConfig.mysql.port,
    database: AppConfig.dbConfig.mysql.database,
    username: AppConfig.dbConfig.mysql.user,
    password: AppConfig.dbConfig.mysql.password,
    models: [Office, Role, User, Employee, Customer
        // , Product, ProductLine, Order, OrderDetail
    ],
})

export default sequelizeAdapter
