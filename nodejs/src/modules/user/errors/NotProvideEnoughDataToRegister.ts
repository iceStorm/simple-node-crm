function errorTemplate(fieldNames: string[]) {
    let str = "Please provide enough "
    str += fieldNames.join(", ")

    return str
}

export default class NotProvideEnoughDataToRegisterError extends Error {
    constructor(...fieldNames: string[]) {
        super(errorTemplate(fieldNames))
    }
}
