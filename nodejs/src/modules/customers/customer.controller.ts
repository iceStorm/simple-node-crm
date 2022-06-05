import { Controller } from "src/core/decorators"
import { Request, Response } from "express"
import { Get, Post, Put, Delete } from "src/core/decorators/http.decorator"

import CustomerService from "./customer.service"
import BaseController from "src/common/base.controller"
import Customer from "./customer.model"
import CustomerStore from "./customer.store"

@Controller("/customers")
export default class CustomerController extends BaseController<Customer, CustomerService, CustomerStore> {
    constructor(private customerService: CustomerService, private customerStore: CustomerStore) {
        super(customerService, customerStore)
    }

    @Get("")
    override async getAll(req: Request, res: Response) {
        // res.status(200).send(await this.customerStore.getAll())
        res.send('customers overrided')
    }
}
