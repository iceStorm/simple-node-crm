import { Injectable } from "src/core/decorators"
import { InjectableScope } from "src/core/decorators/injectable.decorator"

@Injectable()
export default class AppService {
    constructor() {}

    getHello() {
        return "Hello World"
    }
}
