import { DIContainer } from "../injector"

export enum InjectableScope {
    SINGLETON,
    TRANSIENT,
    REQUEST,
}

export interface InjectableOptions {
    token: string | symbol
    scope?: InjectableScope
}

/**
 * Injectable decorator.
 * Mark the target object injectable.
 * @param options
 * @returns
 */
export default function Injectable(options?: InjectableOptions) {
    return function (target: any) {
        // console.log("DIContainer putting:", target)
        DIContainer.put(target.name, new target(...DIContainer.findDependencies(target)))
    }
}

// export function Inject() {
//     return function (target: any, key: any) {
//         const constructorParams = Reflect.getMetadata("design:paramtypes", target)
//     }
// }
