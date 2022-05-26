import { Injectable } from "src/core/decorators"
import { User } from "../user.model"
import UserStore from "../user.store"

@Injectable()
export class MockUserStore implements UserStore {
    private users: User[] = []

    constructor() {
        this.users.push(new User("tuanna153", "-1", "Anh Tuan", "Nguyen"))
    }

    getAll(): User[] {
        return this.users
    }

    getById(id: string): User {
        throw new Error("Method not implemented.")
    }

    softRemoveById(id: string): User {
        throw new Error("Method not implemented.")
    }

    permanentRemoveById(id: string): User {
        throw new Error("Method not implemented.")
    }

    updateById(id: string, updatedUser: User): User {
        throw new Error("Method not implemented.")
    }
}
