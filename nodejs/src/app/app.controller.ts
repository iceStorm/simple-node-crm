import { Request, Response } from "express"
import { Controller as Controller } from "src/core/decorators"
import { Get } from "src/core/decorators/http.decorator"

@Controller("/")
export default class AppController {
    @Get("")
    index(req: Request, res: Response) {
        res.status(200).send("Server running Ok.")
    }

    @Get("hi")
    hi(req: Request, res: Response) {
        res.status(200).send("Hi")
    }
}
