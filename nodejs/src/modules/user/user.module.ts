import Module from "src/core/decorators/module.decorator"
import { MockUserStore } from "./store/mock.user.store"
import { MySQLUserStore } from "./store/mysql.user.store"
import UserController from "./user.controller"
import UserService from "./user.service"

@Module({
    controllers: [UserController],
    providers: [UserService, MockUserStore, MySQLUserStore],
})
export default class UserModule {}
