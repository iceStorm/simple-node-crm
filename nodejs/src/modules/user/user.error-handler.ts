import { NextFunction, Request, Response } from "express"

export const UserErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    // switch (error.name) {
    //     case "":
    //         break

    //     default:
    //         break
    // }

    res.send(error)
}
