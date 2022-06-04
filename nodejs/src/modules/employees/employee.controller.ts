import { Controller } from "src/core/decorators"
import { Request, Response } from "express"

import BaseController from "src/common/base.controller"
import Employee from "./employee.model"
import EmployeeStore from "./employee.store"
import EmployeeService from "./employee.service"
import { Get } from "src/core/decorators/http.decorator"

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
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

    @Get("/:id/reportees")
    async getReporteesOfEmployee(req: Request, res: Response) {
        try {
            const customers = await this.store.getReporteessOfEmployee(parseInt(req.params["id"]))
            res.status(200).send(customers)
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }
}
