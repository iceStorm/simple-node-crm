import { Controller } from "src/core/decorators"
import { Request, Response } from "express"
import { Get, Post, Put, Delete } from "src/core/decorators/http.decorator"

import EmployeesService from "./employees.service"
import { Authenticated } from "../user/middlewares/authenticated.middleware"
import { DIContainer } from "src/core/injector"

@Controller("/employees")
export default class EmployeesController {
    constructor(public readonly employeesService: EmployeesService) {
        this.employeesService = employeesService ?? DIContainer.get(EmployeesService)
    }

    @Get("")
    // @Authenticated
    async getAll(req: Request, res: Response) {
        const allEmployees = await this.employeesService.getAllEmployees()
        console.log(allEmployees)
        // console.log(allEmployees[0].role.name)

        res.status(200).send(allEmployees)
    }

    @Post("")
    create(req: Request, res: Response) {
        res.status(200).send(this.employeesService.createEmployee())
    }

    @Put("")
    modify(req: Request, res: Response) {
        res.status(403).end("forbidden")
    }

    @Delete("")
    delete(req: Request, res: Response) {
        res.status(403).end("forbidden")
    }

    //
    // SINGLE RESOURCE ROUTES
    //

    @Get("/:id")
    async getById(req: Request, res: Response) {
        const foundEmployee = await this.employeesService.getEmployeeById(parseInt(req.params["id"]))
        return res.status(200).send(foundEmployee ?? "Not found")
    }

    @Put("/:id")
    updateById(req: Request, res: Response) {
        res.status(200).send("update emp by id")
    }

    @Delete("/:id")
    deleteById(req: Request, res: Response) {
        res.send(this.employeesService.deleteEmployeeById(parseInt(req.params["id"])))
    }

    @Post("/:id")
    createById(req: Request, res: Response) {
        res.status(403).end("forbidden")
    }
}
