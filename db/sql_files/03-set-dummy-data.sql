INSERT INTO trades (currency, boughtFor, price, amount, boughtIn, userId, isActive)
VALUES ('etc', 50, 1555, 15, DEFAULT, 'id_1234_carrot', true),
       ('btc', 100, 999999, 10, DEFAULT, 'id_1234_tomato', true),
       ('crv', 15, 21.548795, 10, DEFAULT, 'id_1234_carrot', true),
       ('abc', 11, 22.215489, 10, DEFAULT, 'id_1234_cucumber', true),
       ('pdf', 66, 0.0000153, 10, DEFAULT, 'id_1234_tomato', true),
       ('jpg', 52, 0.56, 10, DEFAULT, 'id_1234_cucumber', true),
       ('exe', 13, 15, 10, DEFAULT, 'id_1234_onion', true);

INSERT INTO users (id, name, email, password, createdAt, isActive)
VALUES ('id_1234_carrot', 'Carrot', 'carrot@veg.com', '123456', DEFAULT, TRUE),
       ('id_1234_apple', 'Apple', 'apple@fru.com', '123456', DEFAULT, TRUE),
       ('id_1234_tomato', 'Tomato', 'tomato@veg.com', '123456', DEFAULT, TRUE),
       ('id_1234_cucumber', 'Cucumber', 'cucumber@veg.com', '123456', DEFAULT, TRUE),
       ('id_1234_pear', 'Pear', 'pear@fru.com', '123456', DEFAULT, TRUE),
       ('id_1234_plum', 'Plum', 'plum@fru.com', '123456', DEFAULT, TRUE),
       ('id_1234_onion', 'Onion', 'onion@veg.com', '123456', DEFAULT, TRUE);
