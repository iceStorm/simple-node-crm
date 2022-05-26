import { Sequelize, Model, DataTypes } from "sequelize"

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "mysql",
    port: 3306,
    database: "bvu_envoy_db",
    username: "root",
    password: "7px#V5fV1@Jp",
    protocol: "tcp",
    ssl: true,
})

export default sequelize
