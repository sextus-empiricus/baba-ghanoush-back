export const config = {
    app: {
        port: 3001,
        corsOrigin: 'http://localhost:3000'
    },
    db: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'baba_ghanoush'
    },
    jwt: {
        privateKey: '$2a$12$ko21vfePmgbP/Eux34pMludtAFf/N7VlN4zsuU6kvJGimASjHC6LG'
    }
}