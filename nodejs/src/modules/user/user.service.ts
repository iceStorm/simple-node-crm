import bcrypt from "bcryptjs"

import EmployeesService from "../employees/employees.service"
import { Injectable } from "src/core/decorators"
import { JWTService } from "src/common/services/jwt.service"
import { DIContainer } from "src/core/injector"
import UserStore from "./user.store"
import { AppConfig } from "src/config"

@Injectable()
export default class UserService {
    constructor(private readonly userStore: UserStore) {
        this.userStore = userStore ?? DIContainer.get(UserStore)
    }

    async generateHashPassword(rawPassword: string) {
        return bcrypt.hash(rawPassword, AppConfig.secret!)
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
