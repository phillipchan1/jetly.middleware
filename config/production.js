module.exports = {
    name: 'jetly-prod',
    host: 'localhost',
    port: process.env.PORT,
    url: 'https://esi.sce.com',
    mysql: {
        client: 'mssql',
        connection: {
            host: 'localhost',
            user: process.env.SQL_USER,
            port: 1433,
            password: process.env.SQL_PASS,
            database: 'jetly',
        },
    },
}
