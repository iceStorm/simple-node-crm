import { Request, Response } from "express"
import { Controller as Controller } from "src/core/decorators"
import { Get } from "src/core/decorators/http.decorator"
import { Inject } from "src/core/decorators/injectable.decorator"
import { DIContainer } from "src/core/injector"
import { Authenticated } from "src/modules/user/middlewares/authenticated.middleware"
import { Roles } from "src/modules/user/middlewares/role.middleware"
import AppService from "./app.service"

@Controller("")
export default class AppController {
    constructor(private appService: AppService) {
        this.appService = appService ?? DIContainer.get(AppService)
    }

    @Get("/")
    index(req: Request, res: Response) {
        console.log("this:", this)
        res.status(200).send("Server running Ok.")
    }

    @Get("/hi")
    @Authenticated
    // @Roles("President")
    hi(req: Request, res: Response) {
        res.status(200).send(this.appService.getHello())
    }
}
