import { BaseEntity } from "typeorm"

export default abstract class BaseService<T extends BaseEntity> {}
