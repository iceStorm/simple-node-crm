import { Injectable } from "src/core/decorators"
import { DIContainer } from "src/core/injector"

import OrderStore from "./order.store"

@Injectable()
export default class OrderService {
    constructor(public orderStore: OrderStore) {
        this.orderStore = orderStore ?? DIContainer.get(OrderStore)
    }
}
