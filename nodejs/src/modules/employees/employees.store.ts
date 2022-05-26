import Employee from "./employees.model"

export default interface EmployeesStore {
    /**
     * Getting all Employees from DB.
     */
    getAll(): Employee[]

    /**
     * Getting a Employee object from an id.
     * @param id the id of Employee want to get full object
     */
    getById(id: number): Employee

    /**
     * "Soft" removing a Employee from id.
     * @param id the id of Employee want to soft remove
     */
    softRemoveById(id: number): Employee | undefined

    /**
     * "Permanently" removing a Employee from id.
     * @param id the id of Employee want to be completely removed
     */
    permanentRemoveById(id: number): Employee | undefined

    /**
     * Creating a new Employee
     */
    create(): Employee

    /**
     * Updating a Employee object from an id.
     * @param id the id of Employee want to be updated
     * @param updatedEmployee the updated Employee info
     */
    updateById(id: number, updatedEmployee: Employee): Employee | undefined
}
