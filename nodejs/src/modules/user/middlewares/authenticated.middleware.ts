import { JWTService } from "src/common/services/jwt.service"
import { MiddlewareDecoratorFactory } from "src/core/decorators/middleware.decorator"

/**
 * Indicate that an incoming request contains valid JWT token.
 */
const Authenticated = MiddlewareDecoratorFactory(async function checkAuthenticated(req, res, next) {
    console.log("auth check")

    try {
        const bearer = req.headers.authorization?.split("Bearer ")

        // token not provided
        if (bearer == undefined) {
            return next("The request did not provide a bearer token for authentication")
        }

        // token provided
        const token = bearer[1]
        console.log("token:", token)

        const jwt = await JWTService.verify(token)

        next()
    } catch (error: any) {
        console.log(error)
        next(error)
    }
})

export default Authenticated
