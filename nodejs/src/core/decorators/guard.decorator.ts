import { Request, Response, NextFunction } from "express"
import { DIContainer } from "../injector"

type AppGuardMiddleware = (req: Request, res: Response, next: NextFunction) => void

/**
 * Guard decorator.
 * Adding middlewares by using decorator.
 * @param options
 * @returns
 */
export default function Guard(middlewares: AppGuardMiddleware[]) {
    return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target, propertyKey)
    }
}
