import jwt from "jsonwebtoken"
import * as jose from "jose"
import { AppConfig } from "src/config"

/**
 * An abstraction generic JWT service for using in the app.
 */
export class JWTService {
    static create(payload: any) {
        return new jose.EncryptJWT(payload).encrypt(new TextEncoder().encode(AppConfig.secret))
    }

    static verify(token: string) {
        // console.log("AppConfig.secret:", AppConfig.secret, AppConfig)

        return new Promise((resolve, reject) => {
            jwt.verify(token, AppConfig.secret!, (err, data) => {
                if (err != null) {
                    return reject(err)
                }

                return resolve(data)
            })
        })
    }
}
