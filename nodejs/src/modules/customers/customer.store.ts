import BaseStore from "src/common/base.store"
import Customer from "./customer.model";

export default abstract class CustomerStore extends BaseStore<Customer> {}
