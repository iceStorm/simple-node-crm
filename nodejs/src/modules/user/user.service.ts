import bcrypt from "bcryptjs"

import EmployeeService from "../employees/employee.service"
import { Injectable } from "src/core/decorators"
import { JWTService } from "src/common/services/jwt.service"
import { DIContainer } from "src/core/injector"
import UserStore from "./user.store"
import { AppConfig } from "src/config"
import User from "./user.model"
import UsernameAlreadyExistError from "./errors/UsernameAlreadyExist"

@Injectable()
export default class UserService {
    constructor(private readonly userStore: UserStore) {
        this.userStore = userStore ?? DIContainer.get(UserStore)
    }

    async generateHashPassword(rawPassword: string) {
        return bcrypt.hash(rawPassword, AppConfig.secret!)
    }

    /**
     * Employee can register a new account by provide email, username and password.
     * @param emplooyeeEmail email of the employee need to create new account
     * @param username
     * @param password
     */
    async registerUser(emplooyeeEmail: string, username: string, password: string) {
        const userAlreadyExists = await User.findOne({
            where: {
                username,
            },
        })

        if (userAlreadyExists) {
            throw new UsernameAlreadyExistError(emplooyeeEmail)
        }

        const hashedPassword = await this.generateHashPassword(password)
    }

    async generateJWT(username: string, password: string) {
        const hashedPassword = await this.generateHashPassword(password)
        const foundUser = await this.userStore.authenticate(username, hashedPassword)

        if (foundUser == null) {
            return Promise.reject("Wrong username or password")
        }

        return JWTService.create({
            id: foundUser.username,
        })
    }
}
