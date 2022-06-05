export default class EmailNotExistInDBError extends Error {
    constructor(employeeEmail: string, message = `The email "${employeeEmail}" doesn't exist in the DB`) {
        super(message)
    }
}
