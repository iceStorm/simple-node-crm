import { Request, Response } from "express"
import { Controller as Controller } from "src/core/decorators"
import { Get } from "src/core/decorators/http.decorator"
import { Inject } from "src/core/decorators/injectable.decorator"
import { DIContainer } from "src/core/injector"
import { Authenticated } from "src/modules/user/middlewares/authenticated.middleware"
import { Roles } from "src/modules/user/middlewares/role.middleware"
// import { InjectMany, Inject } from "typedi"
import AppService from "./app.service"

@Controller("")
export default class AppController {
    // inject at app.ts
    // @Inject()
    // private appService!: AppService

    constructor(private appService: AppService) {
        console.log("received appService:", this)
        // this.appService = DIContainer.get('AppService')
        // console.log(this)
    }

    @Get("/")
    index(req: Request, res: Response) {
        console.log("this:", this)
        res.status(200).send("Server running Ok.")
    }

    @Get("/hi")
    @Authenticated
    @Roles("President")
    hi(req: Request, res: Response) {
        res.status(200).send(this.appService.getHello())
        // console.log(this)
        // res.send("hi")
    }
}
