INSERT INTO products(name, price, img) VALUES($1, $2, $3);

-- make sure you do this line so that you get all of the products including the new one after running it
select * from products;