import { Controller } from "src/core/decorators"
import { Request, Response } from "express"
import { Get, Post, Put, Delete } from "src/core/decorators/http.decorator"

import { Authenticated } from "../user/middlewares/authenticated.middleware"
import { DIContainer } from "src/core/injector"
import ProductService from "./product.service"

@Controller("/customers")
export default class ProductController {
    constructor(public readonly productService: ProductService) {
        this.productService = productService ?? DIContainer.get(ProductService)
    }
}
