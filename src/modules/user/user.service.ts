import { Service } from "src/core/decorators"
import * as jose from "jose"
import employeesService from "../employees/employees.service"

import jwt from "jsonwebtoken"

@Service()
class UserService {
    generateJWT(username: string, password: string): Promise<string | undefined> {
        const foundEmployee = employeesService.getEmployeeById(parseInt(username))
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

export default new UserService()
