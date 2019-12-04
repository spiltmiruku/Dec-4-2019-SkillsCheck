CREATE TABLE products (
id SERIAL PRIMARY KEY,
name VARCHAR(25),
price INTEGER,
img TEXT
);

insert into products (product_name, price, image)
values ('Flaming Hot Cheetos', 2.99, 'https://images-na.ssl-images-amazon.com/images/I/91iX-arSDcL._SL1500_.jpg'),
('Korean BBQ Kettle Chips', 3.99, 'https://s3.images-iherb.com/ktt/ktt12957/l/1.jpg'),
('Tillamook Old Fashioned Beef Jerky', 9.99, 'https://target.scene7.com/is/image/Target/GUEST_a7b5a499-91bb-4afb-9dd2-dd51bc1c9a57?wid=488&hei=488&fmt=pjpeg')

select * from store_products
