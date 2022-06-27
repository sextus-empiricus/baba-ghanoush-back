DROP TABLE IF EXISTS trades;

CREATE TABLE trades
(
    id        VARCHAR(36) PRIMARY KEY  DEFAULT (uuid()),
    currency  VARCHAR(20)     NOT NULL,
    boughtFor DECIMAL(10, 3)  NOT NULL,
    price     DECIMAL(27, 18) NOT NULL,
    amount    DECIMAL(27, 18) NOT NULL,
    boughtIn  DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    isActive  BOOLEAN         NOT NULL DEFAULT TRUE,
    userId    VARCHAR(36),
    CONSTRAINT fk_trade_user FOREIGN KEY (userId) REFERENCES users (id) ON DELETE SET NULL
) COLLATE utf8mb4_unicode_ci;