import { DIContainer } from "../injector"
import DECORATOR_KEYS from "./constants"
import { AppRoute } from "./http.decorator"

/**
 * Defining a router for receiving request on a specific path.
 * @param rootPath Router root path
 * @returns
 */
export default function Controller(rootPath: string): ClassDecorator {
    return function (target: any) {
        const routes = Reflect.getMetadata(DECORATOR_KEYS.ROUTES, target)
        Reflect.defineMetadata(DECORATOR_KEYS.ROOT_PATH, rootPath, target)

        const constructorParams = Reflect.getMetadata("design:paramtypes", target)

        // console.log(target, typeof target, constructorParams)
        // console.log("DIContainer:", DIContainer)



        return target

        // constructorParams.forEach((param: any) => {
        //     if (DIContainer.resolve<typeof param.name>(param)) {

        //     }
        // })

        // return DIContainer.resolve(target)
        // return Reflect.construct(target, DIContainer.resolve<any>(constructorParams[0]))
    }
}
