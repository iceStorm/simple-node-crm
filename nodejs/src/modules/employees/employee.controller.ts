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
import Customer from "../customers/customer.model"

@Controller("/employees")
export default class EmployeeController extends BaseController<Employee, EmployeeService, EmployeeStore> {
    constructor(private employeeService: EmployeeService, private employeeStore: EmployeeStore) {
        super(employeeService, employeeStore)
    }

    @Get("/:id/customers")
    async getCustomersOfEmployee(req: Request, res: Response) {
        try {
            const customers = await this.store.getCustomersOfEmployee(parseInt(req.params["id"]))
            res.status(200).send(customers)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}
