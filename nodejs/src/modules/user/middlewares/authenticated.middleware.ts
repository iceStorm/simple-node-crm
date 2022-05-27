import { NextFunction, Request, Response } from "express"
import * as jose from "jose"
import jwt from "jsonwebtoken"

/**
 * Indicate that an incoming request contains valid JWT token.
 */
export const Authenticated = function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = function (req: Request, res: Response, next: NextFunction) {
        console.log("Authenticated this:", this)

        try {
            let bearer = req.headers.authorization?.split("Bearer ")

            if (bearer == undefined) {
                return res.status(401).end("The request did not provide a bearer token for authentication")
            }

            // token provided
            const token = bearer[1]
            console.log("token:", token)

            // await jose.jwtVerify(token, new TextEncoder().encode(process.env["SECRET"]))
            jwt.verify(token, "abcdef")

            next()
        } catch (error) {
            next(error)
            res.status(401).send("Token invalid")
        }

        return originalMethod.bind(this)(req, res, next)
    }
}
