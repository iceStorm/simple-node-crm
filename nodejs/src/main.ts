import "reflect-metadata"

// App
import App from "src/app/app"
import AppModule from "./app/app.module"
import { SequelizeAdapter } from "./common/db/mysql"

export const app = new App({
    port: (process.env.PORT || 7502) as number,
    rootModule: AppModule,
})

SequelizeAdapter.sync({
    logging: console.log,
    // alter: true,
    // force: true,
}).then(() => {
    app.listen()
})
