const dbConfig = {
    mysql: {
        port: 3306,
        host: "localhost",
        user: "root",
        password: process.env["MYSQL_PASSWORD"],
    },
}

export default dbConfig
