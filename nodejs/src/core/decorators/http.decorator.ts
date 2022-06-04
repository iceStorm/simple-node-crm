import { Request, Response, NextFunction } from "express"

import DECORATOR_KEYS from "./constants"

export type HTTPMethod = "get" | "post" | "put" | "patch" | "delete"

export type AppRoute = {
    path: string
    httpMethod: HTTPMethod
    method: any
    // middlewares?: AppMiddleware[]
}

// export type AppMiddleware = (request: Request, response: Response, next: NextFunction, ...params: any[]) => void

const HTTPMethodDecoratorFactory = (method: HTTPMethod) => {
    return (path: string) => {
        return (target: object, propertyKey: string, descriptor: PropertyDescriptor) => {
            // console.log(target)

            // getting the method's class (class type, not a string)
            const className = target.constructor

            // getting the className's "ROUTES" metadata that holds routes
            const routes: Array<AppRoute> = Reflect.hasMetadata(DECORATOR_KEYS.ROUTES, className)
                ? Reflect.getMetadata(DECORATOR_KEYS.ROUTES, className)
                : []

            // pushing the new method decorator's to the className's ROUTES metadata
            routes.push({
                path: path,
                httpMethod: method,
                method: descriptor.value, // propertyKey is the function name being decorated,
            })

            // re-assign the ROUTES metadata to the className
            Reflect.defineMetadata(DECORATOR_KEYS.ROUTES, routes, className)
        }
    }
}

export const Get = HTTPMethodDecoratorFactory("get")

export const Post = HTTPMethodDecoratorFactory("post")

export const Put = HTTPMethodDecoratorFactory("put")

export const Delete = HTTPMethodDecoratorFactory("delete")

export const Patch = HTTPMethodDecoratorFactory("patch")
