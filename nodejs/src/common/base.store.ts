import BaseModel from "./base.model"

export default abstract class BaseStore<T> {
    /**
     * Getting all Objects from DB.
     */
    abstract getAll(): Promise<T[]>

    /**
     * Getting a Object object from an id.
     * @param id the id of Object want to get full object
     */
    abstract getById(id: number): Promise<T | null>

    /**
     * "Soft" removing a Object from id.
     * @param id the id of Object want to soft remove
     */
    abstract softRemoveById(id: number): Promise<boolean>

    /**
     * "Permanently" removing a Object from id.
     * @param id the id of Object want to be completely removed
     */
    abstract permanentRemoveById(id: number): Promise<boolean>

    /**
     * Creating a new Object
     */
    abstract create(input: T): Promise<T>

    /**
     * Updating a Object object from an id.
     * @param id the id of Object want to be updated
     * @param updatedData the updated Object info
     */
    abstract updateById(id: number, updatedData: T): Promise<T | null>
}
