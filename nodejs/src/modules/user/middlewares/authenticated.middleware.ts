import { NextFunction, Request, Response } from "express"
import * as jose from "jose"
import jwt from "jsonwebtoken"
import { DecoratorMiddlewareFactory } from "src/common/middlewares/base.middleware"
import { JWTService } from "src/common/services/jwt.service"

/**
 * Indicate that an incoming request contains valid JWT token.
 */
export const Authenticated = async function (req: Request, res: Response, next: NextFunction) {
    console.log("Authenticated this:", this)
    // console.log(next)

    try {
        const bearer = req.headers.authorization?.split("Bearer ")

        // token not provided
        if (bearer == undefined) {
            return res.status(401).end("The request did not provide a bearer token for authentication")
        }

        // token provided
        const token = bearer[1]
        console.log("token:", token)

        const jwt = await JWTService.verify(token)

        // next()
    } catch (error: any) {
        console.log(error)
        res.status(401).send(error)
    }
}
