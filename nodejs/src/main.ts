// DBs
import { connectMongoDB } from "./common/db/mongodb"
import { sequelize, knex } from "./common/db/mysql"

// App
import App from "src/app/app"
import AppModule from "./app/app.module"

const app = new App({
    port: (process.env.PORT || 7502) as number,
    rootModule: AppModule,
})

// connectMongoDB()
//     .then((mongo) => {
//         console.log("MongoDB connected!")

//         app.listen()

//         // const serviceInstance = Container.get(EmployeesService)
//         // console.log(serviceInstance.getAllEmployees())

//         // we request an instance of ExampleService from TypeDI

//         // serviceInstance.injectedService.printMessage()
//         // logs "I am alive!" to the console
//     })
//     .catch((error) => {
//         console.log(error)
//     })

app.listen()
