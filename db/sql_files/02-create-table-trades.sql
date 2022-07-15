DROP TABLE IF EXISTS trades;

CREATE TABLE trades
(
    id        VARCHAR(36) PRIMARY KEY,
    boughtIn  DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    currency  VARCHAR(20)     NOT NULL,
    boughtFor DECIMAL(10, 3)  NOT NULL,
    price     DECIMAL(27, 18) NOT NULL,
    amount    DECIMAL(27, 18) NOT NULL,
    userId    VARCHAR(36),
    isActive  BOOLEAN         NOT NULL DEFAULT TRUE,
    soldIn    DATETIME                 DEFAULT NULL,
    profit    DECIMAL(10, 3)           DEFAULT NULL,
    CONSTRAINT fk_trade_user FOREIGN KEY (userId) REFERENCES users (id) ON DELETE SET NULL
) COLLATE utf8mb4_unicode_ci;