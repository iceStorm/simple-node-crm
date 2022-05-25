import { Controller } from "src/core/decorators"
import { Request, Response } from "express"
import { Get, Post, Put, Delete } from "src/core/decorators/http.decorator"
import { ContainsIdParam, ExistEmployeeById } from "./employees.middleware"

import employeesService from "./employees.service"
import { jwtAuthenticated } from "src/common/middlewares/jwt.middleware"

@Controller("/employees")
export default class EmployeesController {
    @Get("", jwtAuthenticated)
    getAll(req: Request, res: Response) {
        res.status(200).send(employeesService.getAllEmployees())
    }

    @Post("")
    create(req: Request, res: Response) {
        res.status(200).send(employeesService.createEmployee())
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

    @Get("/:id", ContainsIdParam, ExistEmployeeById)
    getById(req: Request, res: Response) {
        const foundEmployee = employeesService.getEmployeeById(parseInt(req.params["id"]))

        if (foundEmployee == undefined) {
            return res.status(404).send("Not Found")
        }

        return res.status(200).send(foundEmployee)
    }

    @Put("/:id", ContainsIdParam, ExistEmployeeById)
    updateById(req: Request, res: Response) {
        res.status(200).send("update emp by id")
    }

    @Delete("/:id", ContainsIdParam, ExistEmployeeById)
    deleteById(req: Request, res: Response) {
        res.send(employeesService.deleteEmployeeById(parseInt(req.params["id"])))
    }

    @Post("/:id")
    createById(req: Request, res: Response) {
        res.status(403).end("forbidden")
    }
}
