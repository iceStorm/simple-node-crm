import { Sequelize, Model, DataTypes } from "sequelize"

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    database: "bvu_envoy_db",
    username: "root",
    password: "7px#V5fV1@Jp",
})

export default sequelize
