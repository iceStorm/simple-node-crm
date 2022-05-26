import mongooseProvider from "mongoose"

export const connectMongoDB = () => mongooseProvider.connect(process.env["MONGO_CONNECTION"]!, {})
