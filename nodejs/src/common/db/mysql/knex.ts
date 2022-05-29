import knex from "knex"
import { AppConfig } from "src/config"

const knexAdapter = knex({
    client: "mysql",
    connection: {
        host: AppConfig.dbConfig.mysql.host,
        port: AppConfig.dbConfig.mysql.port,
        user: AppConfig.dbConfig.mysql.user,
        password: AppConfig.dbConfig.mysql.password,
        database: AppConfig.dbConfig.mysql.database,
    },
})

export default knexAdapter
