export default class UsernameAlreadyExistError extends Error {
    constructor(employeeEmail: string, message = `Username already exist with the employee email "${employeeEmail}"`) {
        super(message)
    }
}
