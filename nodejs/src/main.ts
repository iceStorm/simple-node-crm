import "reflect-metadata"
// import 'es6-shim';

// DBs
import { connectMongoDB } from "./common/db/mongodb"

// App
import App from "src/app/app"
import AppModule from "./app/app.module"
import { TypeOrmProvider } from "./common/db/mysql"

export const app = new App({
    port: (process.env.PORT || 7502) as number,
    rootModule: AppModule,
})

TypeOrmProvider.initialize()
    .then(async () => {
        // console.log("Inserting a new user into the database...")
        // const user = new Employee()
        // user.firstName = "Timber"
        // user.lastName = "Saw"
        // user.age = 25
        // await AppDataSource.manager.save(user)
        // console.log("Saved a new user with id: " + user.id)
        // console.log("Loading users from the database...")
        // const users = await AppDataSource.manager.find(User)
        // console.log("Loaded users: ", users)
        // console.log("Here you can setup and run express / fastify / any other framework.")

        app.listen()
    })
    .catch((error) => console.log(error))
