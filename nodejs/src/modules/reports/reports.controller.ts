import { Controller } from "src/core/decorators"
import { Request, Response } from "express"
import { Get, Post } from "src/core/decorators/http.decorator"
import UserService from "./reports.service"
import { DIContainer } from "src/core/injector"
import ReportsService from "./reports.service"

@Controller("/reports")
export default class ReportsController {
    constructor(private reportsService: ReportsService) {
        // console.log(this.reportsService)
    }
}
