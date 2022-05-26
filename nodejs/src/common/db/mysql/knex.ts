import knex from "knex"

const knexProvider = knex({
    client: "mysql",
    connection: process.env["MYSQL_CONNECTION"],
})

export default knexProvider
