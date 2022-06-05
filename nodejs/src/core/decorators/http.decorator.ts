import { Request, Response, NextFunction } from "express"

import DECORATOR_KEYS from "./constants"

export type HTTPMethod = "get" | "post" | "put" | "patch" | "delete"

export type AppRoute = {
    path: string
    httpMethod: HTTPMethod
    method: any
}

const HTTPMethodDecoratorFactory = (method: HTTPMethod) => {
    return (path: string) => {
        return (target: object, propertyKey: string, descriptor: PropertyDescriptor) => {
            // console.log(target, target.constructor, propertyKey, method)

            // getting the method's class (class type, not a string)
            const className = target.constructor

            // getting the className's "ROUTES" metadata that holds routes
            const routes: Array<AppRoute> = Reflect.getOwnMetadata(DECORATOR_KEYS.ROUTES, className) || []

            // this is the first time decorate method inside a controller, so
            // push parent routes first, we will override them if current own (derived) route have the same path
            if (routes.length == 0) {
                const baseControllerRoutes = Reflect.getMetadata(DECORATOR_KEYS.ROUTES, className)
                // console.log("parent prototype routes:", baseControllerRoutes)

                if (baseControllerRoutes != undefined) {
                    routes.push(...baseControllerRoutes)
                }
            }

            // we check if the routes duplicated with current decorating route, so we will remove the previous route
            const haveDuplicates = routes.filter((r) => r.path == path && r.httpMethod == method)

            haveDuplicates.forEach((d) => {
                console.log(routes.indexOf(d))
                routes.splice(routes.indexOf(d), 1)
            })

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
