import { NextFunction, Request, Response } from "express"

export const AppErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    res.send(error)
}
