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
        return User.find()
    }

    /**
     * Getting a User by username
     * @param username username to find User by
     * @returns Promise User|null
     */
    getByUsername(username: string): Promise<User | null> {
        return User.findOneBy({ username: username })
    }

    getById(id: number): Promise<User> {
        throw new Error("Method not implemented.")
    }

    softRemoveById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.")
    }

    permanentRemoveById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.")
    }

    create(): Promise<User> {
        throw new Error("Method not implemented.")
    }

    updateById(id: number, updatedData: User): Promise<User | null> {
        throw new Error("Method not implemented.")
    }
}
