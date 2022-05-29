import EmployeesService from "../employees/employees.service"
import { Injectable } from "src/core/decorators"
import { JWTService } from "src/common/services/jwt.service"
import { DIContainer } from "src/core/injector"

@Injectable()
export default class UserService {
    constructor(private readonly employeesService: EmployeesService) {
        this.employeesService = employeesService ?? DIContainer.get(EmployeesService)
    }

    generateJWT(username: string, password: string) {
        const foundEmployee = this.employeesService.getEmployeeById(parseInt(username))
        console.log(foundEmployee)

        if (!foundEmployee) {
            return Promise.reject("No user exists by the given username")
        }

        return JWTService.create({
            id: foundEmployee.id,
        })
    }
}
