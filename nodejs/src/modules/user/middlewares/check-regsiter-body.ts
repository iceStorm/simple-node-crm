import { Request, Response, NextFunction } from "express"
import NotProvideEnoughDataToRegisterError from "../errors/NotProvideEnoughDataToRegister"

export const CheckRegsiterBody = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    const { username, password, employeeEmail } = req.body

    if (username === undefined || password === undefined || employeeEmail === undefined) {
        next(new NotProvideEnoughDataToRegisterError())
    }

    next()
}
