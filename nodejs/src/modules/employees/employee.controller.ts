import { Controller } from "src/core/decorators"
import { NextFunction, Request, Response } from "express"

import { Authenticated } from "../user/middlewares/authenticated.middleware"
import BaseController from "src/common/base.controller"
import Employee from "./employee.model"
import EmployeeStore from "./employee.store"
import EmployeeService from "./employee.service"
import { Post } from "src/core/decorators/http.decorator"

@Controller("/employees")
export default class EmployeeController extends BaseController<Employee, EmployeeService, EmployeeStore> {
    constructor(private employeeService: EmployeeService, private employeeStore: EmployeeStore) {
        super(employeeService, employeeStore)
    }

    @Post("")
    // @Authenticated
    create(req: Request, res: Response, next: NextFunction): void {
        // return super.create(req, res, next)
        // this.store.
        next("abc")
    }
}
