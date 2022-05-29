import { Sequelize, Model, DataTypes } from "sequelize"
import { AppConfig } from "../../../config"

const sequelizeAdapter = new Sequelize({
    dialect: "mysql",
    host: AppConfig.dbConfig.mysql.host,
    port: AppConfig.dbConfig.mysql.port,
    database: AppConfig.dbConfig.mysql.database,
    username: AppConfig.dbConfig.mysql.user,
    password: AppConfig.dbConfig.mysql.password,
    protocol: "tcp",
    ssl: true,
})

export default sequelizeAdapter
