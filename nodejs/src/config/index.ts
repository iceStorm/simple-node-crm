import path from "node:path/win32"
import dbConfig from "./db.config"

export const AppConfig = {
    rootFolder: path.resolve(__dirname, "../../"),
    dbConfig,
}
