delete from products where id = $1;

-- make sure you do this line so that you get all of the products with the deleted on removed
select * from products;