export default class EmailRegisteredError extends Error {
    constructor(employeeEmail: string, message = `The email "${employeeEmail}" already associated with a user`) {
        super(message)
    }
}
