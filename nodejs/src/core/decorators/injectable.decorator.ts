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
        DIContainer.put(target.name, new target())
    }
}

export function Inject(token?: string | symbol): ParameterDecorator {
    return function (target, key, parameterIndex) {
        console.log(target, key, parameterIndex)

        Object.defineProperty(target, key, {
            get: () => DIContainer.get(token),
            enumerable: true,
            configurable: true,
        })
    }
}
