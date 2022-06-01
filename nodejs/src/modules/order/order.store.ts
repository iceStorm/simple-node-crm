import BaseStore from "src/common/base.store"
import Order from "./order.model"

export default abstract class OrderStore extends BaseStore<Order> {}
