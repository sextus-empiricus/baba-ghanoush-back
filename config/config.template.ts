export const configTemplate = {
    app: {
        port: 1234,
        corsOrigin: 'http://bbg-app-test.herokuapp.com/'
    },
    db: {
        port: 1234,
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'name'
    },
    jwt: {
        privateKey: '1234567890!@#$%^&*()'
    }
}