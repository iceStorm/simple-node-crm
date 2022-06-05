import { Request, Response, NextFunction } from "express"
import { MiddlewareDecoratorFactory } from "src/core/decorators/middleware.decorator"
import { Employee } from "src/entities"
import EmailRegisteredError from "../errors/EmailRegistered"
import User from "../user.model"

const EmailNotRegistered = MiddlewareDecoratorFactory(async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body

    const employee = await Employee.findOne({
        where: {
            email,
        },
        include: [User],
    })

    if (employee?.user != null) {
        return next(new EmailRegisteredError(email))
    }

    next()
})

export default EmailNotRegistered
