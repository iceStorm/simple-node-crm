import { Controller } from "src/core/decorators"
import { Request, Response } from "express"
import { Get, Post, Put, Delete } from "src/core/decorators/http.decorator"

import { Authenticated } from "../user/middlewares/authenticated.middleware"
import { DIContainer } from "src/core/injector"
import CustomerService from "./customer.service"

@Controller("/customers")
export default class CustomerController {
    constructor(public readonly customerService: CustomerService) {
        this.customerService = customerService ?? DIContainer.get(CustomerService)
    }

    @Get("")
    @Authenticated
    getAll(req: Request, res: Response) {
        res.status(200).send(this.customerService.getAllCustomers())
    }

    @Post("")
    create(req: Request, res: Response) {
        res.status(200).send(this.customerService.createCustomer())
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
    getById(req: Request, res: Response) {
        const foundEmployee = this.customerService.getCustomerById(parseInt(req.params["id"]))

        if (foundEmployee == undefined) {
            return res.status(404).send("Not Found")
        }

        return res.status(200).send(foundEmployee)
    }

    @Put("/:id")
    updateById(req: Request, res: Response) {
        res.status(200).send("update emp by id")
    }

    @Delete("/:id")
    deleteById(req: Request, res: Response) {
        res.send(this.customerService.deleteCustomerById(parseInt(req.params["id"])))
    }

    @Post("/:id")
    createById(req: Request, res: Response) {
        res.status(403).end("forbidden")
    }
}
