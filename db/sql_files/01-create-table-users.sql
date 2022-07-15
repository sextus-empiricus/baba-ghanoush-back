DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    id        VARCHAR(36) PRIMARY KEY,
    name      VARCHAR(70) UNIQUE NOT NULL,
    email     VARCHAR(70) UNIQUE NOT NULL,
    password  VARCHAR(70)        NOT NULL,
    createdAt DATETIME           NOT NULL DEFAULT CURRENT_TIMESTAMP,
    isActive  BOOLEAN            NOT NULL DEFAULT TRUE
) COLLATE utf8mb4_unicode_ci;