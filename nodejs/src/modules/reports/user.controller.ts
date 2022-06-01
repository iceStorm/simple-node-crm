import { Controller } from "src/core/decorators"
import { Request, Response } from "express"
import { Get, Post } from "src/core/decorators/http.decorator"
import UserService from "./user.service"
import { DIContainer } from "src/core/injector"
import ReportsService from "./user.service"

@Controller("/reports")
export default class ReportsController {
    constructor(private readonly reportsService: ReportsService) {
        this.reportsService = reportsService ?? DIContainer.get(ReportsService)
    }
}
