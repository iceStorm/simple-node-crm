import path from "node:path/win32"
import dbConfig from "./db.config"

export class AppConfig {
    static get rootFolder() {
        return path.resolve(__dirname, "../../")
    }

    static get secret() {
        return process.env["SECRET"]
    }

    static get dbConfig() {
        return dbConfig
    }
}
