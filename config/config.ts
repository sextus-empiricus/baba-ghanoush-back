export const config = {
    app: {
        port: process.env.PORT || 3001,
        corsOrigin: 'https://bbg-megak-fe.herokuapp.com'
    },

    db: {
        port: 3306,
        host: 'eu-cdbr-west-03.cleardb.net',
        user: 'bbdec548653477',
        password: '38382a78',
        database: 'heroku_1854870925df3da'
    },
    jwt: {
        privateKey: '2F4BCCE0464569771FAEEA317F2C9C121B1BF9D48EA3A1851A259D7A9E484C87'
    }
}