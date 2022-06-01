import { Controller } from "src/core/decorators"
import { Request, Response } from "express"
import { Get, Post, Put, Delete } from "src/core/decorators/http.decorator"

import { Authenticated } from "../user/middlewares/authenticated.middleware"
import { DIContainer } from "src/core/injector"
import OrderService from "./order.service"

@Controller("/customers")
export default class OrderController {
    constructor(public readonly orderService: OrderService) {
        this.orderService = orderService ?? DIContainer.get(OrderService)
    }
}
