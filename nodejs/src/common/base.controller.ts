import { NextFunction, Request, Response } from "express"

import { Delete, Get, Post, Put } from "src/core/decorators/http.decorator"
import { DIContainer } from "src/core/injector"
import { Authenticated } from "src/modules/user/middlewares/authenticated.middleware"
import { BaseEntity } from "typeorm"
import BaseService from "./base.service"
import BaseStore from "./base.store"

export default abstract class BaseController<T extends BaseEntity, S extends BaseService<T>, R extends BaseStore<T>> {
    constructor(protected service: S, protected store: R) {}

    @Get("")
    async getAll(req: Request, res: Response, next: NextFunction) {
        console.log(this)

        const all = await this.store.getAll()
        res.status(200).send(all)
    }

    @Post("")
    @Authenticated
    create(req: Request, res: Response, next: NextFunction) {
        res.status(200).send("create")
    }

    //
    // SINGLE RESOURCE ROUTES
    //

    @Get("/:id")
    async getById(req: Request, res: Response, next: NextFunction) {
        // const foundObject = await this.store.getById(parseInt(req.params["id"]))
        // return res.status(foundObject ? 200 : 404).send(foundObject ?? "Not found")
    }

    @Put("/:id")
    updateById(req: Request, res: Response, next: NextFunction) {
        res.status(200).send(`update {} by id`)
    }

    @Delete("/:id")
    deleteById(req: Request, res: Response, next: NextFunction) {
        // res.send(this.store.permanentRemoveById(parseInt(req.params["id"])))
    }
}
