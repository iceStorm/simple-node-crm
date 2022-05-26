import { NextFunction, Request, Response } from "express"
import * as jose from "jose"
import jwt from "jsonwebtoken"

export type Role = "President" | "Manager" | "Leader" | "Staff"

/**
 * Restrict which roles can be accessed this route.
 * @param roles Allowed roles for this route
 * @returns
 */
export const Roles = (...roles: Role[]) => {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        const originalMethod = descriptor.value

        descriptor.value = function (req: Request, res: Response, next: NextFunction) {
            try {
                console.log("roles")

                next()
            } catch (error) {
                res.status(500).send(error)
            }

            return originalMethod.bind(this)(req, res, next)
        }
    }
}
