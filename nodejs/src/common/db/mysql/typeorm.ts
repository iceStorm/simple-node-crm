import { AppConfig } from "src/config"
import Employee from "src/modules/employees/employees.model"
import { DataSource } from "typeorm"
import mysql2 from "mysql2"

const TypeOrmProvider = new DataSource({
    type: "mysql",
    host: AppConfig.dbConfig.mysql.host,
    port: AppConfig.dbConfig.mysql.port,
    username: AppConfig.dbConfig.mysql.user,
    password: AppConfig.dbConfig.mysql.password,
    database: AppConfig.dbConfig.mysql.database,
    synchronize: true,
    logging: true,
    entities: [Employee],
    subscribers: [],
    migrations: [],
    driver: mysql2,
})

export default TypeOrmProvider
