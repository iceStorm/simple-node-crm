import { CustomError } from 'ts-custom-error'

export default class CustomerNotFoundError extends Error {
    constructor(message = "Customer not found") {
        super(message)
    }
}
