import { NextFunction, Request, Response } from "express"
import { any } from "joi"
import { Model } from "sequelize-typescript"

import { Delete, Get, Patch, Post } from "src/core/decorators/http.decorator"
import CustomerNotFoundError from "src/modules/customers/errors/CustomerNotFoundError"
import BaseService from "./base.service"
import BaseStore from "./base.store"

export default abstract class BaseController<T extends Model, S extends BaseService<T>, R extends BaseStore<T>> {
    constructor(protected service: S, protected store: R) {}

    @Get("")
    async getAll(req: Request, res: Response) {
        const all = await this.store.getAll()
        res.status(200).send(all)
    }

    @Post("")
    async create(req: Request, res: Response) {
        try {
            console.log(req.body)

            const createdResult = await this.store.create(req.body)
            res.status(200).send(createdResult)
        } catch (error: any) {
            console.log(error)
            res.status(500).send(error.original || error.message)
        }
    }

    //
    // SINGLE RESOURCE ROUTES
    //

    @Get("/:id")
    async getById(req: Request, res: Response) {
        try {
            const foundObject = await this.store.getById(parseInt(req.params["id"]))
            return res.status(foundObject ? 200 : 404).send(foundObject ?? "Not found")
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    }

    @Patch("/:id")
    async updateById(req: Request, res: Response) {
        try {
            const updatedObject = await this.store.updateById(parseInt(req.params["id"]), req.body)

            console.log(updatedObject)
            if (updatedObject == null) {
                throw new CustomerNotFoundError()
            }

            res.status(200).send(updatedObject)
        } catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    }

    @Delete("/:id")
    async deleteById(req: Request, res: Response) {
        try {
            const result = await this.store.permanentRemoveById(parseInt(req.params["id"]))
            res.status(200).send(result)
        } catch (error: any) {
            console.log(error)
            res.status(409).send(error.message)
        }
    }
}
