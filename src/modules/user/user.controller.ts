import { Controller } from "src/core/decorators"
import { Request, Response } from "express"
import { Get, Post } from "src/core/decorators/http.decorator"
import userService from "./user.service"
import { jwtAuthenticated } from "src/common/middlewares/jwt.middleware"

@Controller("/users")
export default class UserController {
    @Get("", jwtAuthenticated)
    all(req: Request, res: Response) {
        res.status(200).send("All users")
    }

    @Post("/login")
    async authenticate(req: Request, res: Response) {
        try {
            console.log(req.body)
            const { username, password } = req.body

            if (username === undefined || password === undefined) {
                return res.status(500).send("Please provide enough username and password")
            }

            const jwtToken = await userService.generateJWT(username, password)
            res.status(200).send(jwtToken)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    @Post("/register")
    async register(req: Request, res: Response) {
        try {
            console.log(req.body)
            const { username, password } = req.body

            if (username === undefined || password === undefined) {
                return res.status(500).send("Please provide enough username and password")
            }

            const jwtToken = await userService.generateJWT(username, password)
            res.status(200).send(jwtToken)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}
