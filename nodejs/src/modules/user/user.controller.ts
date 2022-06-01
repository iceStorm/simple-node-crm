import { Controller } from "src/core/decorators"
import { Request, Response } from "express"
import { Get, Post } from "src/core/decorators/http.decorator"
import UserService from "./user.service"
import { Authenticated } from "./middlewares/authenticated.middleware"
import { Roles } from "./middlewares/role.middleware"
import { DIContainer } from "src/core/injector"

@Controller("/users")
export default class UserController {
    constructor(private readonly usersService: UserService) {
        this.usersService = usersService ?? DIContainer.get(UserService)
    }

    // @Get("")
    // all(req: Request, res: Response) {
    //     res.status(200).send("All users.")
    // }

    // @Post("/login")
    // async login(req: Request, res: Response) {
    //     try {
    //         console.log(req.body)
    //         const { username, password } = req.body

    //         if (username === undefined || password === undefined) {
    //             return res.status(500).send("Please provide enough username and password")
    //         }

    //         const jwtToken = await this.usersService.generateJWT(username, password)
    //         res.status(200).send(jwtToken)
    //     } catch (error) {
    //         console.log(error)

    //         res.status(500).send(error)
    //     }
    // }

    @Post("/register")
    async register(req: Request, res: Response) {
        try {
            console.log(req.body)
            const { username, password } = req.body

            if (username === undefined || password === undefined) {
                return res.status(500).send("Please provide enough username and password")
            }

            const jwtToken = await this.usersService.generateJWT(username, password)
            res.status(200).send(jwtToken)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}
