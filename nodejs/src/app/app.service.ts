import { Injectable } from "src/core/decorators"
import { InjectableScope } from "src/core/decorators/injectable.decorator"
import UserStore from "src/modules/user/user.store"

@Injectable()
export default class AppService {
    private readonly userStore!: UserStore

    constructor() {}

    getHello() {
        return "Hello World"
    }
}
