import { Injectable } from "src/core/decorators"
import User from "../user.model"
import UserStore from "../user.store"

@Injectable()
export class MySQLUserStore extends UserStore {
    async authenticate(username: string, password: string) {
        return User.findOneBy({
            username,
            password,
        })
    }

    getAll(): Promise<User[]> {
        throw new Error("Method not implemented.")
    }

    getById(id: number): Promise<User> {
        throw new Error("Method not implemented.")
    }

    softRemoveById(id: number): Promise<User | undefined> {
        throw new Error("Method not implemented.")
    }

    permanentRemoveById(id: number): Promise<User | undefined> {
        throw new Error("Method not implemented.")
    }

    create(): Promise<User> {
        throw new Error("Method not implemented.")
    }

    updateById(id: number, updatedData: User): Promise<User | undefined> {
        throw new Error("Method not implemented.")
    }
}
