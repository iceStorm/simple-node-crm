import * as jose from "jose"
import jwt from "jsonwebtoken"

import EmployeesService from "../employees/employees.service"
import { Injectable } from "src/core/decorators"
// import { Service } from "typedi"

@Injectable()
export default class UserService {
    constructor(private readonly employeesService: EmployeesService) {}

    generateJWT(username: string, password: string): Promise<string | undefined> {
        const foundEmployee = this.employeesService.getEmployeeById(parseInt(username))
        console.log(foundEmployee)

        if (!foundEmployee) {
            return Promise.reject("No user exists with the given username")
        }

        console.log(process.env["SECRET"])

        // return (
        //     new jose.EncryptJWT({
        //         sub: "test jwt subject",
        //         id: foundEmployee.id,
        //         jobTitle: foundEmployee.jobTitle,
        //     })
        //         // .setExpirationTime("30s")
        //         .encrypt(new TextEncoder().encode(process.env["SECRET"]))
        // )

        return Promise.resolve(
            jwt.sign(
                {
                    id: foundEmployee.id,
                },
                "abcdef"
            )
        )
    }
}
