import { NextFunction, Request, Response} from "express"
import DECORATOR_KEYS from "./constants"

export type ErrorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => void

/**
 * Defining a router for receiving request on a specific path.
 * @param rootPath Router root path
 * @returns
 */
export default function Controller(rootPath: string, ...errordMiddlewares: ErrorMiddleware[]) {
    return function (target: any) {
        Reflect.defineMetadata(DECORATOR_KEYS.ROOT_PATH, rootPath, target)
        Reflect.defineMetadata(DECORATOR_KEYS.ERROR_MIDDLEWARES, errordMiddlewares, target)
    }
}
