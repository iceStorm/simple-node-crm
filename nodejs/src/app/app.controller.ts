import { Request, Response } from "express"
import { Controller as Controller } from "src/core/decorators"
import { Get } from "src/core/decorators/http.decorator"
import { Authenticated } from "src/modules/user/middlewares"
import AppService from "./app.service"


@Controller("")
export default class AppController {
    constructor(private appService: AppService) {}

    @Get("/")
    index(req: Request, res: Response) {
        console.log("this:", this)
        res.status(200).send("Server running Ok.")
    }

    @Authenticated
    @Get("/hi")
    hi(req: Request, res: Response) {
        res.status(200).send(this.appService.getHello())
    }
}
