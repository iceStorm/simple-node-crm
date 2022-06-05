import { NextFunction, Request, Response } from "express"
import DECORATOR_KEYS from "./constants"

type MiddlewareHandler = (request: Request, response: Response, next: NextFunction) => void

export const MiddlewareDecoratorFactory = (handler: MiddlewareHandler) => {
    return (target: object, propertyKey: string, descriptor: PropertyDescriptor) => {
        // getting previous defined middlewares
        const middlewares = Reflect.getMetadata(DECORATOR_KEYS.GUARD_MIDDLEWARES, target.constructor) || {}

        // append this middleware to current controller.handler
        if (middlewares[propertyKey] == undefined) {
            middlewares[propertyKey] = [handler]
        } else {
            middlewares[propertyKey].push(handler)
        }

        // re-adding this middleware
        Reflect.defineMetadata(DECORATOR_KEYS.GUARD_MIDDLEWARES, middlewares, target.constructor)
    }
}
