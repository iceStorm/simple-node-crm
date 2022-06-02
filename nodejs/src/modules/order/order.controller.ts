import { Controller } from "src/core/decorators"
import { Request, Response } from "express"
import { Get, Post, Put, Delete } from "src/core/decorators/http.decorator"

import { Authenticated } from "../user/middlewares/authenticated.middleware"
import { DIContainer } from "src/core/injector"
import OrderService from "./order.service"
import BaseController from "src/common/base.controller"
import Order from "./order.model"
import OrderStore from "./order.store"

@Controller("/orders")
export default class OrderController extends BaseController<Order, OrderService, OrderStore> {
    constructor(private orderService: OrderService, private orderStore: OrderStore) {
        super(orderService, orderStore)
    }
}
