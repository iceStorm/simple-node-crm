import BaseModel from "src/common/base.model"

export default class Employee implements BaseModel {
    id: number
    removed: boolean
    lastName: string
    firstName: string
    email: string
    extensions: string
    officeCode: string
    reportsTo: number
    jobTitle: string

    constructor(
        id: number,
        removed: boolean,
        lastName: string,
        firstName: string,
        email: string,
        extensions: string,
        officeCode: string,
        reportsTo: number,
        jobTitle: string
    ) {
        this.id = id
        this.removed = removed
        this.lastName = lastName
        this.firstName = firstName
        this.email = email
        this.extensions = extensions
        this.officeCode = officeCode
        this.reportsTo = reportsTo
        this.jobTitle = jobTitle
    }
}
