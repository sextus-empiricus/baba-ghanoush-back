INSERT INTO users (id, name, email, password, createdAt, isActive)
VALUES ('id_1234_carrot', 'Carrot', 'carrot@veg.com', '123456', DEFAULT, TRUE),
       ('id_1234_apple', 'Apple', 'apple@fru.com', '123456', DEFAULT, TRUE),
       ('id_1234_tomato', 'Tomato', 'tomato@veg.com', '123456', DEFAULT, TRUE),
       ('id_1234_cucumber', 'Cucumber', 'cucumber@veg.com', '123456', DEFAULT, TRUE),
       ('id_1234_pear', 'Pear', 'pear@fru.com', '123456', DEFAULT, TRUE),
       ('id_1234_plum', 'Plum', 'plum@fru.com', '123456', DEFAULT, TRUE),
       ('id_1234_onion', 'Onion', 'onion@veg.com', '123456', DEFAULT, TRUE);

INSERT INTO trades (currency, boughtFor, price, userId)
VALUES ('etc', 50, 1555, 'id_1234_carrot'),
       ('btc', 100, 999999, 'id_1234_tomato'),
       ('crv', 15, 21.548795, 'id_1234_carrot'),
       ('abc', 11, 22.215489, 'id_1234_cucumber'),
       ('pdf', 66, 0.0000153, 'id_1234_tomato'),
       ('jpg', 52, 0.56, 'id_1234_cucumber'),
       ('exe', 13, 15, 'id_1234_onion');
