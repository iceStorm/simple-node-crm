import { CustomError } from 'ts-custom-error'

export default class EmployeeNotFoundError extends CustomError {
    constructor(message = "Employee not found") {
        super(message)
    }
}
