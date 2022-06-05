import { NextFunction, Request, Response } from "express"

export const UserErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message)
}
