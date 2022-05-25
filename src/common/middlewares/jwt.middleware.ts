import { NextFunction, Request, Response } from "express"
import * as jose from "jose"
import jwt from "jsonwebtoken"

export const jwtAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let bearer = req.headers.authorization?.split("Bearer ")

        if (bearer == undefined) {
            return res.status(400).end("the request did not provide a bearer token")
        }

        // token provided
        const token = bearer[1]
        console.log("token:", token)

        // await jose.jwtVerify(token, new TextEncoder().encode(process.env["SECRET"]))
        jwt.verify(token, "abcdef")

        console.log(bearer)
        next()
    } catch (error) {
        res.status(500).send(error)
    }
}
