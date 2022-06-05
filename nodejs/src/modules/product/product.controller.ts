import { Controller } from "src/core/decorators"
import { Request, Response } from "express"
import { Get, Post, Put, Delete } from "src/core/decorators/http.decorator"

import ProductService from "./product.service"
import BaseController from "src/common/base.controller"
import Product from "./product.model"
import ProductStore from "./product.store"

@Controller("/products")
export default class ProductController extends BaseController<Product, ProductService, ProductStore> {
    constructor(private productService: ProductService, private productStore: ProductStore) {
        super(productService, productStore)
    }
}
