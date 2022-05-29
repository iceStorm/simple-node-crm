import { NextFunction, Request, Response } from "express"
import * as jose from "jose"
import jwt from "jsonwebtoken"
import { DecoratorMiddlewareFactory } from "src/common/middlewares/base.middleware"

export type Role = "President" | "Manager" | "Leader" | "Staff"

/**
 * Restrict which roles can be accessed this route.
 * @param roles Allowed roles for this route
 * @returns
 */
export const Roles = (...roles: Role[]) => {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        const originalMethod = descriptor.value

        DecoratorMiddlewareFactory.create({
            descriptor,
            originalMethodName: propertyKey,
            handlerMethod: function (req: Request, res: Response) {
                // console.log(req);

                try {
                    console.log("roles")
                    // next()
                } catch (error) {
                    res.status(500).send(error)
                }

                return originalMethod.bind(this)(...arguments)
            },
        })
    }
}
