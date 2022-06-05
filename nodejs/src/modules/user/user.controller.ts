import { NextFunction, Request, Response } from "express"

import { Controller } from "src/core/decorators"
import { Post } from "src/core/decorators/http.decorator"
import UserService from "./user.service"
import BaseController from "src/common/base.controller"
import UserStore from "./user.store"
import User from "./user.model"
import { UserErrorHandler } from "./user.error-handler"
import { CheckRegsiterBody, EmailExistInDB, EmailNotRegistered } from "./middlewares"

@Controller("/users", UserErrorHandler)
export default class UserController extends BaseController<User, UserService, UserStore> {
    constructor(private usersService: UserService, private userStore: UserStore) {
        super(usersService, userStore)
    }

    @Post("/login")
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.body)
            const { username, password } = req.body

            if (username === undefined || password === undefined) {
                return res.status(500).send("Please provide enough username and password")
            }

            const jwtToken = await this.usersService.generateJWT(username, password)
            res.status(200).send(jwtToken)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    @CheckRegsiterBody
    @EmailExistInDB
    @EmailNotRegistered
    @Post("/register")
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const { username, password, email } = req.body

            const jwtToken = await this.usersService.registerUser(email, username, password)

            res.status(200).send(jwtToken)
        } catch (error: any) {
            next(error)
        }
    }
}
