import BaseStore from "src/common/base.store"
import Customer from "./customer.model"

type k = keyof Customer

export default abstract class CustomerStore extends BaseStore<Customer> {}
