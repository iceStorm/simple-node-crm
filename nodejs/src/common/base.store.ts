import BaseModel from "./base.model"

export default abstract class BaseStore<T> {
    /**
     * Getting all Employees from DB.
     */
    abstract getAll(): Promise<T[]>

    /**
     * Getting a Employee object from an id.
     * @param id the id of Employee want to get full object
     */
    abstract getById(id: number): Promise<T>

    /**
     * "Soft" removing a Employee from id.
     * @param id the id of Employee want to soft remove
     */
    abstract softRemoveById(id: number): Promise<T | undefined>

    /**
     * "Permanently" removing a Employee from id.
     * @param id the id of Employee want to be completely removed
     */
    abstract permanentRemoveById(id: number): Promise<T | undefined>

    /**
     * Creating a new Employee
     */
    abstract create(): Promise<T>

    /**
     * Updating a Employee object from an id.
     * @param id the id of Employee want to be updated
     * @param updatedData the updated Employee info
     */
    abstract updateById(id: number, updatedData: T): Promise<T | undefined>
}
