-- Show the current state of the items and orders tables
SELECT * FROM items;
SELECT * FROM orders;

-- Insert new orders
INSERT INTO orders (item_name, number) VALUES ('apple', 1);
INSERT INTO orders (item_name, number) VALUES ('apple', 3);
INSERT INTO orders (item_name, number) VALUES ('pear', 2);

-- Show the updated state of the items and orders tables
SELECT "--";
SELECT * FROM items;
SELECT * FROM orders;
