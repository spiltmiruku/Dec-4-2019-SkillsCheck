CREATE TABLE products (
id SERIAL PRIMARY KEY,
name VARCHAR(25),
price INTEGER,
img TEXT
);

INSERT INTO products (name, price, img)
VALUES ('Hot Cheetos', 3, 'https://images-na.ssl-images-amazon.com/images/I/91iX-arSDcL._SL1500_.jpg'),
('Kettle Chips', 5, 'https://s3.images-iherb.com/ktt/ktt12957/l/1.jpg'),
('Tillamook Beef Jerky', 10, 'https://target.scene7.com/is/image/Target/GUEST_a7b5a499-91bb-4afb-9dd2-dd51bc1c9a57?wid=488&hei=488&fmt=pjpeg');


SELECT * FROM products;
