import BaseModel from "src/common/base.model"

export default class Customer implements BaseModel {
    id: number
    removed: boolean
    contactLastName: string
    contactFirstName: string
    phone: string
    addressLine1: string
    addressLine2: string
    city: string
    state: string
    postalCode: string
    country: string
    salesRepEmploymentNumber: number
    creditLimit: number

    constructor(
        id: number,
        removed: boolean,
        contactLastName: string,
        contactFirstName: string,
        phone: string,
        addressLine1: string,
        addressLine2: string,
        city: string,
        state: string,
        postalCode: string,
        country: string,
        salesRepEmploymentNumber: number,
        creditLimit: number
    ) {
        this.id = id
        this.removed = removed
        this.contactLastName = contactLastName
        this.contactFirstName = contactFirstName
        this.phone = phone
        this.addressLine1 = addressLine1
        this.addressLine2 = addressLine2
        this.city = city
        this.state = state
        this.postalCode = postalCode
        this.country = country
        this.salesRepEmploymentNumber = salesRepEmploymentNumber
        this.creditLimit = creditLimit
    }
}
