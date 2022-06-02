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
        if (token == "undefined" || token == undefined) {
            return undefined
        }

        for (const [key, instance] of this.providers) {
            if (instance instanceof token) {
                return instance
            }
        }

        return undefined
    }
})()
