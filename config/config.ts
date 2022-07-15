export const config = {
    app: {
        port: process.env.PORT || 3001,
        corsOrigin: 'http://bbg-megak-test-fe.herokuapp.com'
    },
    db: {
        port: 3306,
        host: 'eu-cdbr-west-03.cleardb.net',
        user: 'b8adb70e68430f',
        password: 'd23e9ff9',
        database: 'heroku_e0d00962635b82c'
    },
    jwt: {
        privateKey: '2F4BCCE0464569771FAEEA317F2C9C121B1BF9D48EA3A1851A259D7A9E484C87'
    }
}