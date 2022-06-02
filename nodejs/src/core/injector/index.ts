import { string } from "joi"
import "reflect-metadata"

export type Provider = {
    token: any
    instance: any
}

export const DIContainer = new (class {
    private providers: Map<string | symbol, any> = new Map<string | symbol, any>()

    /**
     * Putting a provider with unique token to the centralized DI Container.
     */
    put(token: string | symbol, value: any) {
        this.providers.set(token, value)
    }

    /**
     * Getting the declared instance of the target class
     * @param target The class want to be resolved
     */
    get(token: any): typeof token | undefined {
        // console.log("\nDIContainer resolving token:", token, this.providers)
        // throw new Error("DIContainer error")
        // console.log("token:", token)

        if (token == "undefined" || token == undefined) {
            // throw new Error("Token can't be undefined'")
            return undefined
        }

        for (const [key, instance] of this.providers) {
            // console.log(instance, token, token == undefined, typeof token)

            try {
                if (token != undefined && instance instanceof token) {
                    // console.log("resolved token:", instance)
                    return instance
                }
            } catch (error) {
                console.error(`Error occurred while resolving token ${token}${typeof token}: ${error}`)
            }
        }

        // console.log("not found token:", token)
        return undefined
    }
})()
