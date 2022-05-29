import { Request, Response, NextFunction } from "express"

// export const BaseMiddleware = (req: Request, res: Response, next: NextFunction) => {}

export type DecoratorMiddlewareFactoryParams = {
    handlerMethod: (...args: any[]) => any
    originalMethodName: string
    descriptor: PropertyDescriptor
}

export class DecoratorMiddlewareFactory {
    static create({ handlerMethod, descriptor, originalMethodName }: DecoratorMiddlewareFactoryParams) {
        // const originalMethod = descriptor.value

        // originalMethod.bind(this)(req, res, next)
        descriptor.value = handlerMethod

        // re-assign the original method name (currently anonymous)
        Object.defineProperty(descriptor.value, "name", {
            value: originalMethodName,
            configurable: true,
        })
    }
}
