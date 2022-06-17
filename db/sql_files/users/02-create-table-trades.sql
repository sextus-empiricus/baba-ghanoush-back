DROP TABLE IF EXISTS trades;

CREATE TABLE trades
(
    id        VARCHAR(36) PRIMARY KEY  DEFAULT (uuid()),
    currency  VARCHAR(20)     NOT NULL,
    boughtFor DECIMAL(9, 2)   NOT NULL,
    price     DECIMAL(27, 18) NOT NULL,
    createdAt DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    userId    VARCHAR(36)     NOT NULL,
    CONSTRAINT fk_users_trades FOREIGN KEY (userId) REFERENCES users (id) ON DELETE NO ACTION
) COLLATE utf8mb4_unicode_ci;