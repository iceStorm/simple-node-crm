import { Request, Response, NextFunction } from "express"
import mockEmployeeStore from "./stores/mock.employee.store"

export const ContainsIdParam = (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.path, req.params, parseInt(req.params["id"]))

    const id = parseInt(req.params["id"]) || -1

    if (id == -1) {
        return res.status(400).end("The request did not provide a valid id (number)")
    } else {
        next()
    }
}

export const ExistEmployeeById = (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params["id"])

    const foundEmployee = mockEmployeeStore.getById(id)

    if (!foundEmployee) {
        return res.status(400).end("The employee does not exist")
    } else {
        next()
    }
}

