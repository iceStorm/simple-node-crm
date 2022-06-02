import { Request, Response, NextFunction } from "express"
import EmployeesStore from "./employee.store"

export const ContainsIdParam = (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.path, req.params, parseInt(req.params["id"]))

    const id = parseInt(req.params["id"]) || -1

    if (id == -1) {
        return res.status(400).end("The request did not provide a valid id (number)")
    } else {
        next()
    }
}

export const ExistEmployeeById = (req: Request, res: Response, next: NextFunction) => next()
// new (class {
//     constructor() {
//         const id = parseInt(req.params["id"])

//         const foundEmployee = employeeStore.getById(id)

//         if (!foundEmployee) {
//             res.status(400).end("The employee does not exist")
//         } else {
//             next()
//         }
//     }
// })()
