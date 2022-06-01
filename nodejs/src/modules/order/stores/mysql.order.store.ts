import { Injectable } from "src/core/decorators"
import Order from "../order.model"
import OrderStore from "../order.store"

@Injectable()
export default class MySQLOrderStore extends OrderStore {
    getAll(): Promise<Order[]> {
        throw new Error("Method not implemented.")
    }
    getById(id: number): Promise<Order> {
        throw new Error("Method not implemented.")
    }
    softRemoveById(id: number): Promise<Order | undefined> {
        throw new Error("Method not implemented.")
    }
    permanentRemoveById(id: number): Promise<Order | undefined> {
        throw new Error("Method not implemented.")
    }
    create(): Promise<Order> {
        throw new Error("Method not implemented.")
    }
    updateById(id: number, updatedData: Order): Promise<Order | undefined> {
        throw new Error("Method not implemented.")
    }
}
