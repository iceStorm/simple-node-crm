import { Injectable } from "src/core/decorators"
import Product from "../product.model"
import ProductStore from "../product.store"

@Injectable()
export class MySQLProductStore extends ProductStore {
    getAll(): Promise<Product[]> {
        throw new Error("Method not implemented.")
    }
    getById(id: number): Promise<Product> {
        throw new Error("Method not implemented.")
    }
    softRemoveById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.")
    }
    permanentRemoveById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.")
    }
    create(): Promise<Product> {
        throw new Error("Method not implemented.")
    }
    updateById(id: number, updatedData: Product): Promise<Product | null> {
        throw new Error("Method not implemented.")
    }
}
