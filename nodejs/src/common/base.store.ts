import BaseModel from "./base.model";

export default abstract class BaseStore<T extends BaseModel> {
    /**
     * Getting all Employees from DB.
     */
    abstract getAll(): T[]

    /**
     * Getting a Employee object from an id.
     * @param id the id of Employee want to get full object
     */
    abstract getById(id: number): T

    /**
     * "Soft" removing a Employee from id.
     * @param id the id of Employee want to soft remove
     */
    abstract softRemoveById(id: number): T | undefined

    /**
     * "Permanently" removing a Employee from id.
     * @param id the id of Employee want to be completely removed
     */
    abstract permanentRemoveById(id: number): T | undefined

    /**
     * Creating a new Employee
     */
    abstract create(): T

    /**
     * Updating a Employee object from an id.
     * @param id the id of Employee want to be updated
     * @param updatedData the updated Employee info
     */
    abstract updateById(id: number, updatedData: T): T | undefined
}
