import BaseStore from "src/common/base.store"
import User from "./user.model"

export default abstract class UserStore extends BaseStore<User> {
    abstract authenticate(username: string, password: string): Promise<User | null>
}
