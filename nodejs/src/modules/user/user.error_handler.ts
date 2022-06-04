import { NextFunction } from "express"

export const UserErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    switch (error.name) {
        case "":
            break

        default:
            break
    }
}
