import App from "src/app/app"
import AppModule from "./app/app.module"
// import knexProvider from "./common/db/mysql/knex"
// import sequelize from "./common/db/mysql/sequelize"
import Employee from "./modules/employees/employees.model"
const port = (process.env.PORT || 7502) as number

const app = new App({
    port: port,
    rootModule: AppModule,
})

app.connectDBs()
    .then(() => {
        app.listen()

        // knexProvider
            // .raw("select * from users")
            // .then((users) => {
            //     console.log(users)
            // })
            // .catch((err) => {
            //     console.log(err)
            // })

        // sequelize
        //     .query("select * from users")
        //     .then((users: any) => {
        //         console.log(users)
        //     })
        //     .catch((err: any) => {
        //         console.log(err)
        //     })
    })
    .catch((err) => console.log(err))
