import { CustomError } from 'ts-custom-error'

export default class EmployeeNotFoundError extends Error {
    constructor(message = "Employee not found") {
        super(message)
    }
}
