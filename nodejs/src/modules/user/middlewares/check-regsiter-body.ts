import { Request, Response, NextFunction } from "express"
import { MiddlewareDecoratorFactory } from "src/core/decorators/middleware.decorator"
import NotProvideEnoughDataToRegisterError from "../errors/NotProvideEnoughDataToRegister"

const CheckRegsiterBody = MiddlewareDecoratorFactory((req: Request, res: Response, next: NextFunction) => {
    const { username, password, email } = req.body

    if (username === undefined || password === undefined || email === undefined) {
        next(new NotProvideEnoughDataToRegisterError("username", "password", "employeeEmail"))
    }

    next()
})

export default CheckRegsiterBody
