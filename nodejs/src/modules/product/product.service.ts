import { Injectable } from "src/core/decorators"
import { DIContainer } from "src/core/injector"

import ProductStore from "./product.store"

@Injectable()
export default class ProductService {
    constructor(public productStore: ProductStore) {
        this.productStore = productStore ?? DIContainer.get(ProductStore)
    }
}
