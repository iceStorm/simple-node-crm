import { Controller } from "src/core/decorators"
import { NextFunction, Request, Response } from "express"

import { Authenticated } from "../user/middlewares/authenticated.middleware"
import BaseController from "src/common/base.controller"
import Employee from "./employee.model"
import EmployeeStore from "./employee.store"
import EmployeeService from "./employee.service"
import { Get, Post } from "src/core/decorators/http.decorator"
import { ParamsDictionary } from "express-serve-static-core"
import { ParsedQs } from "qs"

@Controller("/employees")
export default class EmployeeController extends BaseController<Employee, EmployeeService, EmployeeStore> {
    constructor(private employeeService: EmployeeService, private employeeStore: EmployeeStore) {
        super(employeeService, employeeStore)
    }

    @Get("")
    // override async getAll(req: Request, res: Response, next: NextFunction) {
    //     console.log(this)

    //     // const all = await this.service.getAllEmployees()
    //     // res.status(200).send(all)
    // }
    override async getAll(
        req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
        res: Response<any, Record<string, any>>,
        next: NextFunction
    ): Promise<void> {
        res.status(200).send('all')
    }

    // @Post("")
    // // @Authenticated
    // create(req: Request, res: Response, next: NextFunction): void {
    //     // return super.create(req, res, next)
    //     // this.store.
    //     next("abc")
    // }
}
