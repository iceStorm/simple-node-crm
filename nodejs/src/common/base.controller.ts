import { NextFunction, Request, Response } from "express"
import { Model } from "sequelize-typescript"

import { Delete, Get, Patch, Post } from "src/core/decorators/http.decorator"
import BaseService from "./base.service"
import BaseStore from "./base.store"

export default abstract class BaseController<T extends Model, S extends BaseService<T>, R extends BaseStore<T>> {
    constructor(protected service: S, protected store: R) {}

    @Get("")
    async getAll(req: Request, res: Response, next: NextFunction) {
        // console.log(this)

        const all = await this.store.getAll()
        res.status(200).send(all)
    }

    @Post("")
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const createdResult = await this.store.create(req.body)
            res.status(200).end(createdResult)
        } catch (error) {
            res.status(500).send((error as any).message)
        }
    }

    //
    // SINGLE RESOURCE ROUTES
    //

    @Get("/:id")
    async getById(req: Request, res: Response, next: NextFunction) {
        const foundObject = await this.store.getById(parseInt(req.params["id"]))
        return res.status(foundObject ? 200 : 404).send(foundObject ?? "Not found")
    }

    @Patch("/:id")
    async updateById(req: Request, res: Response, next: NextFunction) {
        try {
            const updatedObject = await this.store.updateById(parseInt(req.params["id"]), req.body)
            res.status(200).send(`updated`)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    @Delete("/:id")
    async deleteById(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.store.permanentRemoveById(parseInt(req.params["id"]))
            res.status(200).send(result)
        } catch (error) {
            console.log(error)
            res.status(409).send((error as any).message)
        }
    }
}
