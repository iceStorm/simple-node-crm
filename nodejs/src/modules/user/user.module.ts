import Module from "src/core/decorators/module.decorator"
import UserController from "./user.controller"
import UserService from "./user.service"

@Module({
    controllers: [UserController],
    providers: [UserService],
})
export default class UserModule {}
