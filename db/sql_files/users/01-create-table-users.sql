DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    id        VARCHAR(36) PRIMARY KEY DEFAULT (uuid()),
    name      VARCHAR(70) UNIQUE NOT NULL,
    email     VARCHAR(70) UNIQUE NOT NULL,
    password  VARCHAR(70)        NOT NULL,
    createdAt DATETIME                DEFAULT CURRENT_TIMESTAMP,
    isActive  BOOLEAN                 DEFAULT TRUE
) COLLATE utf8mb4_unicode_ci;