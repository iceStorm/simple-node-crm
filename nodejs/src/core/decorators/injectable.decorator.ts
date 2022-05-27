import AppService from "src/app/app.service"
import { MockUserStore } from "src/modules/user/store/mock.user.store"
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

export function Inject() {
    return function (target: Object, key: any) {
        const constructorParams = Reflect.getMetadata("design:paramtypes", target)
        // console.log(constructorParams)
        console.log(target, key)
        // console.log(DIContainer)

        // Object.defineProperty(target, key, {
        //     get: () => {
        //         return new AppService()
        //     },
        // })

        // const firstParamName = constructorParams[0].name[0].toLowerCase() + constructorParams[0].name.slice(1)
        // console.log(firstParamName)
        // console.log("resolve:", DIContainer.get(constructorParams[0].name))

        // Object.defineProperty(target, firstParamName, {
        //     get: () => DIContainer.get(constructorParams[0].name),
        //     enumerable: true,
        //     configurable: true,
        // })

        // console.log(target.hasOwnProperty("appService"))
    }
}
