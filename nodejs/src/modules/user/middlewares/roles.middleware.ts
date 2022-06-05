import { MiddlewareDecoratorFactory } from "src/core/decorators/middleware.decorator"

/**
 * Restrict which roles can be accessed this route.
 * @param roles Allowed roles for this route
 * @returns
 */
type Roles = "President" | "Manager" | "Leader" | "Staff"

const Roles = (...roles: Roles[]) =>
    MiddlewareDecoratorFactory(function checkRoles(req, res, next) {
        console.log("roles check")
        next()
    })

export default Roles
