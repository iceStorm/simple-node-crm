import { Request, Response, NextFunction } from "express"
import { MiddlewareDecoratorFactory } from "src/core/decorators/middleware.decorator"
import { Employee } from "src/entities"
import EmailNotExistInDBError from "../errors/EmailNotExistInDB"
import EmailRegisteredError from "../errors/EmailRegistered"
import User from "../user.model"

const EmailExistInDB = MiddlewareDecoratorFactory(async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body

    const employee = await Employee.findOne({
        where: {
            email,
        },
    })

    if (employee == null) {
        return next(new EmailNotExistInDBError(email))
    }

    next()
})

export default EmailExistInDB
