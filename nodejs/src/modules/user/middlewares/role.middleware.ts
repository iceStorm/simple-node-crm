import { NextFunction, Request, Response } from "express"
import * as jose from "jose"
import jwt from "jsonwebtoken"

export type Role = "President" | "Manager" | "Leader" | "Staff"

// wrapper for receiving params
export const Roles = (...roles: Role[]) => {
    // actual middleware function
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            next()
        } catch (error) {
            res.status(500).send(error)
        }
    }
}
