import DECORATOR_KEYS from "./constants"
import { AppRoute } from "./http.decorator"

/**
 * Defining a router for receiving request on a specific path.
 * @param rootPath Router root path
 * @returns
 */
export default function Controller(rootPath: string): ClassDecorator {
    return function (target: any, s?: any) {
        const routes = Reflect.getMetadata(DECORATOR_KEYS.ROUTES, target)
        Reflect.defineMetadata(DECORATOR_KEYS.ROOT_PATH, rootPath, target)

        console.log(target, s)
    }
}
const requiredMetadataKey = Symbol("required")

export function validate(
    target: any,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<Function>
) {
    let method = descriptor.value!

    descriptor.value = function () {
        let requiredParameters: number[] = Reflect.getOwnMetadata(
            requiredMetadataKey,
            target,
            propertyName
        )
        if (requiredParameters) {
            for (let parameterIndex of requiredParameters) {
                if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                    throw new Error("Missing required argument.")
                }
            }
        }
        return method.apply(this, arguments)
    }
}
