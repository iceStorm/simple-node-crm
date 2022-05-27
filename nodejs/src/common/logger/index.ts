import path from "node:path/win32"
import { AppConfig } from "src/config"
import winston, { format } from "winston"
const { combine, timestamp, label, printf, errors } = format

const Logger = winston.createLogger({
    format: combine(timestamp()),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: path.resolve(AppConfig.rootFolder, "./logs"), level: "error" }),
    ],
})

export default Logger
