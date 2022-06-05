import { NextFunction, Request, Response } from "express"

import { Controller } from "src/core/decorators"
import { Post } from "src/core/decorators/http.decorator"
import UserService from "./user.service"
import BaseController from "src/common/base.controller"
import UserStore from "./user.store"
import User from "./user.model"
import { UserErrorHandler, UserErrorHandler2 } from "./user.error_handler"
import { Authenticated, Roles } from "./middlewares"

@Controller("/users", UserErrorHandler)
export default class UserController extends BaseController<User, UserService, UserStore> {
    constructor(private usersService: UserService, private userStore: UserStore) {
        super(usersService, userStore)
    }

    @Post("/login")
    async login(req: Request, res: Response) {
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

            res.status(500).send(error)
        }
    }

    @Authenticated
    @Roles("President", "Leader")
    @Post("/register")
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("ok")
            // console.log(req.body)
            // const { username, password, employeeEmail } = req.body

            // if (username === undefined || password === undefined || employeeEmail === undefined) {
            //     next(new NotProvideEnoughDataToRegisterError())
            // }

            // const jwtToken = await this.usersService.registerUser(employeeEmail, username, password)
            // res.status(200).send(jwtToken)
        } catch (error: any) {
            next(error.message)
        }
    }
}
